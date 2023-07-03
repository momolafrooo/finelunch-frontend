/* eslint-disable react/jsx-key */
import { TableContainer, Thead, useColorModeValue, Table as ChakraTable, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { useSortBy, useTable } from "react-table";
import Pagination from "../pagination";

interface Props {
  columns: any[];
  data: object[];
  total: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

export default function Table(props: Props) {
  const { columns, data, onPageChange, total } = props;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <>
      <TableContainer bg={useColorModeValue("white", "gray.700")} rounded="lg" mb={4}>
        <ChakraTable {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>;
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </ChakraTable>
      </TableContainer>
      <Pagination onPageChange={onPageChange} size={total} />
    </>
  );
}
