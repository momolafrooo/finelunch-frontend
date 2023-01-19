import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FiPlusSquare, FiSearch } from "react-icons/fi";

export default function PageHeader() {
  return (
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
        <InputLeftElement pointerEvents="none">
          <FiSearch color="gray.200" />
        </InputLeftElement>
        <Input type="search" placeholder="Recherche..." />
      </InputGroup>
    </Box>
  );
}