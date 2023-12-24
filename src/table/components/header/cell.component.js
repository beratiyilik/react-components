import React from "react";
import {
  StyledTh,
  StyledHeaderContainer,
  StyledSortAndNameContainer,
  StyledHeaderName,
} from "./../../styled-components";
import { Filter } from "./filter.component";
import { Sort } from "./sort.component";

export const HeaderCell = ({
  fieldName,
  headerName,
  sort: { sortable, field: sortFieldName, sort, setSort },
  filter: { filterable, field: filterFieldName, filter, setFilter },
  selection: { selection, component },
}) => {
  return (
    <StyledTh>
      <StyledHeaderContainer>
        <StyledSortAndNameContainer>
          <StyledHeaderName>{headerName || fieldName}</StyledHeaderName>
          <Sort
            field={sortFieldName || fieldName}
            passive={!sortable}
            sort={sort}
            setSort={setSort}
          />
        </StyledSortAndNameContainer>
        <Filter
          field={filterFieldName || fieldName}
          passive={!filterable}
          filter={filter}
          setFilter={setFilter}
        />
        {selection && component}
      </StyledHeaderContainer>
    </StyledTh>
  );
};
