import { useState, useEffect, useMemo } from "react";

export const useFilter = (data, filters) => {
  const applyFilters = (item) => {
    return filters.every((filter) => {
      if (filter.field === "all") {
        return Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(filter.value.toLowerCase())
        );
      } else {
        return (
          item[filter.field] &&
          item[filter.field]
            .toString()
            .toLowerCase()
            .includes(filter.value.toLowerCase())
        );
      }
    });
  };

  const filteredData = data.filter(applyFilters);

  return filteredData;
};

export const useSort = (data, sort) => {
  const sortedData = sort
    ? data.sort((a, b) => {
        const fieldA = a[sort.field];
        const fieldB = b[sort.field];
        if (fieldA < fieldB) {
          return sort.direction === "asc" ? -1 : 1;
        }
        if (fieldA > fieldB) {
          return sort.direction === "asc" ? 1 : -1;
        }
        return 0;
      })
    : data;

  return sortedData;
};

export const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, currentPage, pageSize]);

  const totalPages = useMemo(
    () => Math.ceil(data.length / pageSize),
    [data.length, pageSize]
  );
  const hasPreviousPage = useMemo(() => currentPage > 1, [currentPage]);
  const hasNextPage = useMemo(
    () => currentPage < totalPages,
    [currentPage, totalPages]
  );

  return {
    paginatedData,
    currentPage,
    setCurrentPage,
    totalPages,
    hasPreviousPage,
    hasNextPage,
    pageSize,
    setPageSize,
  };
};
