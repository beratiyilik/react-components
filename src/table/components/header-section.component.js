import React, { useEffect, useMemo } from "react";
import { useTable } from "../table.context";
import { TableHeader } from "./";

export const HeaderSection = () => {
  const {
    // data,
    lengthOfData,
    options: { name, fieldOptions = [], pagination, searchable },
    search: { searchTerm, setSearchTerm, data: searchedData },
    filters,
    sort,
    pagination: { data: paginatedData, ...restOfPagination },
    selection,
  } = useTable();

  const { toggleAll, isSelectedAll } = selection;

  const memoizedHeaderSelection = useMemo(
    () => (
      <HeadSelection
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
        headerSelection={memoizedHeaderSelection}
      />
    ),
    [fieldOptions, filters, sort, memoizedHeaderSelection]
  );

  return memoizedTableHeader;
};

const HeadSelection = ({ passive, toggleAll, isAllSelected }) => {
  if (passive) return null;
  return <ToggleSwitch selected={isAllSelected} onChange={toggleAll} />;
};

const ToggleSwitch = ({ selected, onChange }) => {
  return (
    <label style={{ position: "relative" }}>
      <input type="checkbox" checked={selected} onChange={onChange} />
      <span style={{ position: "absolute", top: 0, left: 0 }}></span>
    </label>
  );
};
