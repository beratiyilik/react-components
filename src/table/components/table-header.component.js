import React from "react";
import {
  StyledThead,
  StyledTr,
  StyledTh,
  StyledCol,
  StyledColgroup,
} from "./../styled-components";
import { HeaderCell } from "./";

export const TableHeader = ({
  fieldOptions,
  filters: { filters, setFilters },
  sort: { sort, setSort },
  headerSelection,
}) => {
  return (
    <StyledThead>
      <StyledTr>
        {fieldOptions.map((fieldOption, index) => {
          const filterFieldName =
            fieldOption.filterFieldName || fieldOption.fieldName;
          const filter = filters.find(
            (filter) => filter.field === filterFieldName
          ) || { field: filterFieldName, value: "" };
          const handleSetFilter = ({ field, value }) => {
            setFilters((filters) => {
              const newFilters = filters.filter(
                (filter) => filter.field !== field
              );
              if (value) newFilters.push({ field, value });
              return newFilters;
            });
          };
          return (
            <HeaderCell
              key={index}
              {...fieldOption}
              sort={sort}
              setSort={setSort}
              filter={filter}
              setFilter={handleSetFilter}
              headerSelection={headerSelection}
            />
          );
        })}
      </StyledTr>
    </StyledThead>
  );
};
