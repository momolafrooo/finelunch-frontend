import React, { useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");

  return { page, limit, search, sort, setPage, setSearch };
};

export default usePagination;
