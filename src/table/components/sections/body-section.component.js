import React, { useMemo } from "react";
import { useTable } from "../../table.context";
import { TableBody } from "..";

export const BodySection = () => {
  const {
    options: { name, fieldOptions = [], searchable, pagination },
    data,
    // setData,
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
        options={{
          fieldOptions,
        }}
        data={processedData}
        selection={{
          toggle,
          isSelected,
        }}
      />
    ),
    [fieldOptions, processedData, toggle, isSelected]
  );

  return memoizedTableBody;
};
