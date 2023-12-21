import React, { createContext, useState, useContext, useEffect } from "react";
import { useFilter, useSort, usePagination } from "./table.hooks";

const TableContext = createContext();

export const TableProvider = ({
  data,
  options: { name, fieldOptions = [], pagination, allFilter },
  children,
}) => {
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState({});
  const filteredData = useFilter(data, filters);
  const sortedData = useSort(filteredData, sort);
  const { paginatedData, ...restOfPagination } = usePagination(sortedData);

  const value = {
    // data,
    name,
    fieldOptions,
    pagination,
    allFilter,
    lengthOfData: data.length,
    filters,
    setFilters,
    sort,
    setSort,
    lengthOfFilteredData: filteredData.length,
    processedData: paginatedData,
    ...restOfPagination,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export const useTable = () => useContext(TableContext);
