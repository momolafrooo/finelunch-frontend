/* eslint-disable react/no-children-prop */
import { ReactElement, useMemo } from "react";
import DashboardLayout from "../../components/dashboard-layout";
import type { NextPageWithLayout } from "../_app";
import PageHeader from "../../components/page-header";
import Table from "../../components/table";
import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FiMenu, FiPlusSquare } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import Pagination from "../../components/pagination";

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

  return (
    <>
      <PageHeader />
      <Table columns={columns} data={data} />
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
