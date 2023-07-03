/* eslint-disable react/no-children-prop */
import { ReactElement, useCallback, useMemo } from "react";
import DashboardLayout from "../../../components/dashboard-layout";
import { queryClient, type NextPageWithLayout } from "../../_app";
import PageHeader from "../../../components/page-header";
import Table from "../../../components/table";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useModal } from "../../../utils/useModal";
import AddUpdateUser from "../../../components/add-update-users";
import DeleteModal from "../../../components/delete-modal";
import { User } from "../../../services/Endpoints/users/types";
import { useMutation, useQuery } from "react-query";
import UserApi from "../../../services/Endpoints/users";
import usePagination from "../../../utils/usePagination";

const Dashboard: NextPageWithLayout = () => {
  const { setPage, setSearch, ...paginationRequest } = usePagination();

  const { showModal, onCloseModal, onShowModal, selectedItem } = useModal<User>();

  const {
    isLoading: isLoadingList,
    isError,
    data,
    error,
  } = useQuery({
    queryKey: ["USER", paginationRequest],
    queryFn: () => UserApi.findAll(paginationRequest),
    keepPreviousData: true,
    staleTime: 5000,
  });

  const {
    showModal: openUpdate,
    onCloseModal: onCloseUpdate,
    onShowModal: onOpenUpdate,
    selectedItem: selectedUpdate,
  } = useModal<User>();

  const {
    showModal: openDelete,
    onCloseModal: onCloseDelete,
    onShowModal: onOpenDelete,
    selectedItem: selectedDelete,
  } = useModal<User>();

  const { isLoading: isLoadingDelete, mutate } = useMutation(UserApi.delete, {
    onSuccess: () => {
      onCloseDelete();
      queryClient.invalidateQueries({ queryKey: ["USER", paginationRequest] });
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
        Header: "Prénom",
        accessor: "firstName",
      },
      {
        Header: "Nom",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Nom d'utilisateur",
        accessor: "username",
      },
      {
        Header: "Role",
        accessor: "role.name",
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
                <MenuItem onClick={onOpenUpdate(cell?.row?.original)}>Modifier</MenuItem>
                <MenuItem onClick={onOpenDelete(cell?.row?.original)}>Supprimer</MenuItem>
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
      <PageHeader title="Utilisateurs" onClickAdd={onShowModal()} onSearch={setSearch} />
      <Table onPageChange={onPageChange} columns={columns} data={data?.docs ?? []} total={data?.totalPages!} />
      {showModal && <AddUpdateUser title="Ajouter utilisateur" isOpen={showModal} onClose={onCloseModal} />}
      {openUpdate && (
        <AddUpdateUser title="Modifier utilisateur" user={selectedUpdate} isOpen={openUpdate} onClose={onCloseUpdate} />
      )}
      {openDelete && (
        <DeleteModal title="Supprimer utilisateur" isOpen={openDelete} onClose={onCloseDelete} onSubmit={onDelete} />
      )}
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
