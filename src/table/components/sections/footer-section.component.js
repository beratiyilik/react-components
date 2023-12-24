import React, { useMemo } from "react";
import { useTable } from "../../table.context";
import { TableFooter } from "..";
import { TableSummary } from "../shared.components";

export const FooterSection = () => {
  const {
    options: {
      name,
      fieldOptions = [],
      pagination,
      searchable,
      footerComponents = [],
    },
    data,
    // setData,
    search: { searchTerm, setSearchTerm, data: searchedData },
    filters: { filters, setFilters, data: filteredData },
    sort: { sort, setSort, data: sortedData },
    pagination: {
      data: paginatedData,
      component: memoizedPagination,
      ...restOfPagination
    },
    selection,
  } = useTable();

  const memoizedTableSummary = useMemo(
    () => (
      <TableSummary
        passive={false}
        {...{
          fieldOptions,
          data,
          searchTerm,
          filters,
          sort,
          lengthOfFilteredData: filteredData.length,
        }}
      />
    ),
    [fieldOptions, filteredData, filters, data, searchTerm, sort]
  );

  const memoizedTableFooter = useMemo(
    () => (
      <TableFooter
        numberOfHeaders={fieldOptions.length}
        components={[
          ...footerComponents,
          memoizedPagination,
          memoizedTableSummary,
        ]}
      />
    ),
    [
      fieldOptions.length,
      footerComponents,
      memoizedPagination,
      memoizedTableSummary,
    ]
  );

  return memoizedTableFooter;
};
