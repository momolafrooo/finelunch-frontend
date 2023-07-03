/* eslint-disable react/no-children-prop */
import { ReactElement, useCallback, useMemo } from "react";
import RolesLayout from "../../../components/dashboard-layout";
import { queryClient, type NextPageWithLayout } from "../../_app";
import PageHeader from "../../../components/page-header";
import Table from "../../../components/table";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useModal } from "../../../utils/useModal";
import AddUpdateRole from "../../../components/add-update-roles";
import { useMutation, useQuery } from "react-query";
import { RoleApi } from "../../../services/Endpoints";
import { Role } from "../../../services/Endpoints/role/types";
import DeleteModal from "../../../components/delete-modal";
import usePagination from "../../../utils/usePagination";

const Roles: NextPageWithLayout = () => {
  const { setPage, setSearch, ...paginationRequest } = usePagination();
  const {
    isLoading: isLoadingList,
    isError,
    data,
    error,
  } = useQuery({
    queryKey: ["ROLE", paginationRequest],
    queryFn: () => RoleApi.findAll(paginationRequest),
    keepPreviousData: true,
    staleTime: 5000,
  });

  const { showModal, onCloseModal, onShowModal } = useModal<Role>();
  const {
    showModal: openUpdate,
    onCloseModal: onCloseUpdate,
    onShowModal: onOpenUpdate,
    selectedItem: selectedUpdate,
  } = useModal<Role>();

  const {
    showModal: openDelete,
    onCloseModal: onCloseDelete,
    onShowModal: onOpenDelete,
    selectedItem: selectedDelete,
  } = useModal<Role>();

  const { isLoading: isLoadingDelete, mutate } = useMutation(RoleApi.delete, {
    onSuccess: () => {
      onCloseDelete();
      queryClient.invalidateQueries({ queryKey: ["ROLE", paginationRequest] });
    },
  });

  const onDelete = useCallback(() => {
    selectedDelete && mutate(selectedDelete);
  }, [mutate, selectedDelete]);

  const onPageChange = useCallback(
    ({ selected }: any) => {
      setPage(selected + 1);
    },
    [setPage]
  );

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "_id",
      },
      {
        Header: "Titre",
        accessor: "name",
      },
      {
        Header: "Slug",
        accessor: "slug",
      },
      {
        Header: "Date",
        accessor: "created_at",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ cell }: any) => {
          return (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FiMenu color={"white"} />}
                bg={"blue.500"}
                _hover={{ bg: "blue.400" }}
              />
              <MenuList>
                <MenuItem onClick={onOpenUpdate(cell?.row?.values)}>Modifier</MenuItem>
                <MenuItem onClick={onOpenDelete(cell?.row?.values)}>Supprimer</MenuItem>
              </MenuList>
            </Menu>
          );
        },
      },
    ],
    [onOpenDelete, onOpenUpdate]
  );

  return (
    <>
      <PageHeader title="Roles" onClickAdd={onShowModal()} onSearch={setSearch} />
      <Table onPageChange={onPageChange} columns={columns} data={data?.docs ?? []} total={data?.totalPages!} />
      {showModal && <AddUpdateRole title="Ajouter role" isOpen={showModal} onClose={onCloseModal} />}
      {openUpdate && (
        <AddUpdateRole title="Modifier role" isOpen={openUpdate} role={selectedUpdate} onClose={onCloseUpdate} />
      )}
      {openDelete && (
        <DeleteModal title="Supprimer role" isOpen={openDelete} onClose={onCloseDelete} onSubmit={onDelete} />
      )}
    </>
  );
};

Roles.getLayout = function getLayout(page: ReactElement) {
  return <RolesLayout>{page}</RolesLayout>;
};

export default Roles;
