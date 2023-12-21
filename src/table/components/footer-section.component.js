import React, { useEffect, useMemo } from "react";
import { useTable } from "../table.context";
import { TableFooter } from "./";
import { Pagination, TableInfo } from "./shared.components";

export const FooterSection = () => {
  const {
    // data,
    lengthOfData,
    options: {
      name,
      fieldOptions = [],
      pagination,
      searchable,
      footerComponents = [],
    },

    search: { searchTerm, setSearchTerm, data: searchedData },
    filters: { filters, setFilters, data: filteredData },
    sort: { sort, setSort, data: sortedData },
    pagination: {
      data: paginatedData,
      component: memoizedPagination,
      ...restOfPagination
    },
  } = useTable();

  /*
  const memoizedPagination = useMemo(
    () => <Pagination passive={!pagination} {...restOfPagination} />,
    [pagination, restOfPagination]
  );
  */

  const memoizedTableInfo = useMemo(
    () => (
      <TableInfo
        passive={false}
        {...{
          fieldOptions,
          lengthOfData,
          searchTerm,
          filters,
          sort,
          lengthOfFilteredData: filteredData.length,
        }}
      />
    ),
    [fieldOptions, filteredData, filters, lengthOfData, searchTerm, sort]
  );

  const memoizedTableFooter = useMemo(
    () => (
      <TableFooter
        numberOfHeaders={fieldOptions.length}
        components={[
          ...footerComponents,
          memoizedPagination,
          memoizedTableInfo,
        ]}
      />
    ),
    [
      fieldOptions.length,
      footerComponents,
      memoizedPagination,
      memoizedTableInfo,
    ]
  );

  return memoizedTableFooter;
};
