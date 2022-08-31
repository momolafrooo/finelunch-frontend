/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiPlusSquare, FiSearch } from "react-icons/fi";
import { ReactElement } from "react";
import DashboardLayout from "../../components/dashboard-layout";
import type { NextPageWithLayout } from "../_app";

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Box bg={useColorModeValue("white", "gray.700")} rounded="lg" w="100%" p={4} marginBottom="7">
        <Flex justifyContent="space-between" alignItems="center" mb="4">
          <Heading fontSize="2xl" fontWeight="bold" fontFamily="Nunito">
            Utilisateurs
          </Heading>
          <Button
            bg={"blue.500"}
            color={"white"}
            leftIcon={<FiPlusSquare />}
            _hover={{
              bg: "blue.500",
            }}
          >
            Ajouter
          </Button>
        </Flex>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FiSearch color="gray.200" />} />
          <Input type="search" placeholder="Recherche..." />
        </InputGroup>
      </Box>
      <TableContainer bg={useColorModeValue("white", "gray.700")} rounded="lg">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>into</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>centimetres (cm)</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>metres (m)</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
