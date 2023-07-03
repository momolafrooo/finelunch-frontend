import React, { useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");

  return { page, limit, search, sort, setPage, setSearch };
};

export default usePagination;
