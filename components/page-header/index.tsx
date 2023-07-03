/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import React, { ChangeEvent, ReactNode, useCallback } from "react";
import { FiPlusSquare, FiSearch } from "react-icons/fi";
import useDebounce from "../../utils/useDebouce";

interface Props {
  onSearch?: (value: string) => void;
  onClickAdd?: React.MouseEventHandler;
  title: string;
}

export default function PageHeader(props: Props) {
  const { onSearch, onClickAdd, title } = props;
  const { debounce } = useDebounce();

  const handleSearch = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      onSearch && onSearch(e.target.value);
    }, 500),
    [onSearch]
  );

  return (
    <Box bg={useColorModeValue("white", "gray.700")} rounded="lg" w="100%" p={4} marginBottom="7">
      <Flex justifyContent="space-between" alignItems="center" mb="4">
        <Heading fontSize="2xl" fontWeight="bold" fontFamily="Nunito">
          {title}
        </Heading>
        <Button
          onClick={onClickAdd}
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
        <Input type="search" placeholder="Recherche..." onChange={handleSearch} />
      </InputGroup>
    </Box>
  );
}
