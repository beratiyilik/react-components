import React from "react";
import { StyledThead, StyledTr } from "./../../styled-components";
import { HeaderCell } from "./cell.component";
export * from "./cell.component";
export * from "./selection.component";

export const TableHeader = ({
  fieldOptions,
  filters: { filters, setFilters },
  sort: { sort, setSort },
  selection: { component },
}) => {
  const setFilter = createHandleSetFilter(setFilters);
  return (
    <StyledThead>
      <StyledTr>
        {fieldOptions.map((fieldOption, index) => {
          const {
            fieldName,
            sortable,
            sortFieldName,
            filterable,
            filterFieldName,
            selection,
          } = fieldOption;
          const _sortFieldName = sortFieldName || fieldName;
          const _filterFieldName = filterFieldName || fieldName;
          const filter = filters.find(
            ({ field }) => field === _filterFieldName
          ) || { field: _filterFieldName, value: "" };
          return (
            <HeaderCell
              {...fieldOption}
              key={index}
              sort={{
                sortable,
                field: _sortFieldName,
                sort,
                setSort,
              }}
              filter={{
                filterable,
                field: _filterFieldName,
                filter,
                setFilter,
              }}
              selection={{
                selection,
                component,
              }}
            />
          );
        })}
      </StyledTr>
    </StyledThead>
  );
};

const createHandleSetFilter =
  (setFilters) =>
  ({ field, value }) => {
    setFilters((currentFilters) => {
      const filteredFilters = currentFilters.filter(
        (filter) => filter.field !== field
      );
      return value ? [...filteredFilters, { field, value }] : filteredFilters;
    });
  };
