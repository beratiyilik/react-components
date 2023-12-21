import React, { createContext, useContext, useMemo } from "react";
import useTableData from "./hooks";
import { Pagination } from "./components";

const TableContext = createContext();

export const TableProvider = ({ data, options, children }) => {
  const { pagination: hasPagination = true } = options;
  const tableData = useTableData(data, options);
  const { pagination } = tableData;
  const memoizedPagination = useMemo(
    () => <Pagination {...pagination} passive={!hasPagination} />,
    [pagination, hasPagination]
  );

  const value = {
    // data,
    lengthOfData: data.length,
    options,
    ...tableData,
    pagination: {
      ...pagination,
      component: memoizedPagination,
    },
    processedData: pagination.data,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export const useTable = () => useContext(TableContext);
