import React, { useEffect, useMemo } from "react";
import { useTable } from "../table.context";
import { TableBody } from "./";

export const BodySection = () => {
  const {
    data,
    lengthOfData,
    options: { name, fieldOptions = [], pagination, searchable },
    search: { searchTerm, setSearchTerm, data: searchedData },
    filters: { filters, setFilters, data: filteredData },
    sort: { sort, setSort, data: sortedData },
    pagination: { data: paginatedData, ...restOfPagination },
    selection: { toggle, isSelected },
    processedData,
  } = useTable();

  const memoizedTableBody = useMemo(
    () => (
      <TableBody
        data={processedData}
        options={{
          fieldOptions,
        }}
        toggle={toggle}
        isSelected={isSelected}
      />
    ),
    [fieldOptions, processedData, toggle, isSelected]
  );

  return memoizedTableBody;
};
