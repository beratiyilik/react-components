import { useState, useMemo, useEffect } from "react";
import { useDebounce } from "../../hooks";
/*
const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 25;
// const PAGE_SIZE_OPTIONS = [25, 50, 100, 250, 500, 1000];

const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, currentPage, pageSize]);

  const totalPages = useMemo(
    () => Math.ceil(data.length / pageSize),
    [data.length, pageSize]
  );

  return {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    data: paginatedData,
    totalPages,
  };
};

export default usePagination;
*/

/*
const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const debouncedCurrentPage = useDebounce(currentPage, 500);
  const debouncedPageSize = useDebounce(pageSize, 500);

  const paginatedData = useMemo(() => {
    const startIndex = (debouncedCurrentPage - 1) * debouncedPageSize;
    return data.slice(startIndex, startIndex + debouncedPageSize);
  }, [data, debouncedCurrentPage, debouncedPageSize]);

  const totalPages = useMemo(
    () => Math.ceil(data.length / debouncedPageSize),
    [data.length, debouncedPageSize]
  );

  return {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    data: paginatedData,
    totalPages,
  };
};

export default usePagination;
*/

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;
const PAGE_SIZE_OPTIONS = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 250,
    label: "250",
  },
  {
    value: 500,
    label: "500",
  },
  {
    value: 1000,
    label: "1000",
  },
];

const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const debouncedCurrentPage = useDebounce(currentPage, 500);

  const paginatedData = useMemo(() => {
    const startIndex = (debouncedCurrentPage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, debouncedCurrentPage, pageSize]);

  const totalPages = useMemo(
    () => Math.ceil(data.length / pageSize),
    [data.length, pageSize]
  );

  useEffect(() => {
    if (data.length < currentPage * pageSize)
      setCurrentPage(DEFAULT_PAGE);
  }, [data.length, currentPage, pageSize]);

  return {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    data: paginatedData,
    totalPages,
  };
};

export default usePagination;
