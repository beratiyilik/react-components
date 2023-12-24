import React, { useMemo } from "react";
import { useTable } from "../../table.context";
import { TableHeader } from "..";
import { HeaderSelection } from "./../";

export const HeaderSection = () => {
  const {
    options: { name, fieldOptions = [], searchable, pagination },
    data,
    // setData,
    search: { searchTerm, setSearchTerm, data: searchedData },
    filters,
    sort,
    pagination: { data: paginatedData, ...restOfPagination },
    selection,
  } = useTable();

  const { toggleAll, isSelectedAll } = selection;

  const memoizedHeaderSelection = useMemo(
    () => (
      <HeaderSelection
        passive={false}
        toggleAll={toggleAll}
        isAllSelected={isSelectedAll}
      />
    ),
    [toggleAll, isSelectedAll]
  );

  const memoizedTableHeader = useMemo(
    () => (
      <TableHeader
        fieldOptions={fieldOptions}
        filters={filters}
        sort={sort}
        selection={{
          component: memoizedHeaderSelection,
        }}
      />
    ),
    [fieldOptions, filters, sort, memoizedHeaderSelection]
  );

  return memoizedTableHeader;
};
