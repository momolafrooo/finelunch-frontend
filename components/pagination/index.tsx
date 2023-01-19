/* eslint-disable react/no-children-prop */
import { Box, useColorModeValue } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import style from "./styles.module.css";

interface Props {
  onPageChange: (selectedItem: { selected: number }) => void;
  size?: number;
}

const Pagination = (props: Props) => {
  const { onPageChange, size = 10 } = props;
  return (
    <Box bg={useColorModeValue("white", "gray.700")} rounded="lg" w="100%" p={4} marginBottom="7" overflowX={"auto"}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        pageCount={size}
        previousLabel="<"
        renderOnZeroPageCount={undefined}
        containerClassName={style.pagination}
        previousLinkClassName={style.paginationLink}
        nextLinkClassName={style.paginationLink}
        disabledClassName={style.paginationLinkDisabled}
        activeClassName={style.paginationLinkActive}
      />
    </Box>
  );
};

export default Pagination;
