/* eslint-disable react/no-children-prop */
import { ReactElement, useMemo } from "react";
import DashboardLayout from "../../../components/dashboard-layout";
import type { NextPageWithLayout } from "../../_app";
import PageHeader from "../../../components/page-header";
import Table from "../../../components/table";
import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useModal } from "../../../utils/useModal";
import { BaseModal } from "../../../components/base-modal";
import { useForm } from "react-hook-form";
import CustomInput from "../../../components/custom-input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect from "../../../components/custom-select";
import CustomSwitch from "../../../components/custom-switch";
import CustomCheckbox from "../../../components/custom-checkbox";
import CustomRadio from "../../../components/custom-radio";
import CustomTextArea from "../../../components/custom-textarea";

const schema = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  nationality: Yup.string().required(),
  date: Yup.string().required(),
  age: Yup.number().required(),
  description: Yup.string().required(),
  notif: Yup.boolean().required(),
  receipt: Yup.string().required(),
});

const data = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    age: 34,
    visits: 44,
    status: "active",
    progress: "active",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Smith",
    age: 34,
    visits: 44,
    status: "active",
    progress: "active",
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Smith",
    age: 34,
    visits: 44,
    status: "active",
    progress: "active",
  },
  {
    id: 4,
    firstName: "John",
    lastName: "Smith",
    age: 34,
    visits: 44,
    status: "active",
    progress: "active",
  },
  {
    id: 5,
    firstName: "John",
    lastName: "Smith",
    age: 34,
    visits: 44,
    status: "active",
    progress: "active",
  },
];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Dashboard: NextPageWithLayout = () => {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Visits",
        accessor: "visits",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
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
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
              </MenuList>
            </Menu>
          );
        },
      },
    ],
    []
  );

  const { showModal, onCloseModal, onShowModal, selectedItem } = useModal();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {
      receipt: "strawberry",
      notif: true,
      description: "Magna sed dolor reru",
      age: 92,
      date: "1970-05-02",
      nationality: "Gambie",
      lastname: "Berger",
      firstname: "Sonia",
      send: true,
    },
  });

  console.log(errors);

  const onSubmit = (data: any) => console.log(JSON.stringify(data));

  return (
    <>
      <PageHeader onClickAdd={onShowModal()} />
      <Table columns={columns} data={data} />
      {showModal && (
        <BaseModal title="Modal" isOpen={showModal} onClose={onCloseModal()}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput label={"First name"} placeholder={"First name"} control={control} name={"firstname"} />
            <CustomInput label={"Last name"} placeholder={"Last name"} name={"lastname"} control={control} />
            <CustomInput type="date" label={"Date"} placeholder={"Date"} name={"date"} control={control} />
            <CustomInput type="number" label={"Age"} placeholder={"Age"} name={"age"} control={control} />
            <CustomTextArea label={"Description"} placeholder={"Description"} name={"description"} control={control} />
            <CustomSelect
              label={"Nationalité"}
              placeholder={"Nationalité"}
              name={"nationality"}
              control={control}
              options={[
                { value: "Sénégal", label: "Sénégal" },
                { value: "Gambie", label: "Gambie" },
                { value: "Ghana", label: "Ghana" },
                { value: "France", label: "France" },
              ]}
            />
            <CustomSwitch label={"Notif"} name={"notif"} control={control} />
            <CustomCheckbox label={"Send email"} name={"send"} control={control} />
            <CustomRadio label={"Recette"} name={"receipt"} control={control} options={options} />
            <Stack direction="row" justifyContent="flex-end">
              <Button variant="ghost" onClick={onCloseModal()} mr={3}>
                Annuler
              </Button>
              <Button colorScheme="blue" type="submit">
                Enregistrer
              </Button>
            </Stack>
          </form>
        </BaseModal>
      )}
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
