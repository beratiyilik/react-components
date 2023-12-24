import React from "react";
import {
  StyledPaginationContainer,
  StyledPaginationButton,
  StyledPaginationSelect,
  StyledPaginationPageInfo,
  StyledSearchBoxContainer,
  StyledSearchBoxLabel,
  StyledSearchBoxInput,
  StyledToggleSwitchLabel,
  StyledToggleSwitchInput,
  StyledToggleSwitchSlider,
  StyledTableSummaryContainer,
  StyledTableSummaryRow,
  StyledTableSummaryColumn,
} from "./../styled-components";

export const ToggleSwitch = ({ selected, onChange }) => {
  return (
    <StyledToggleSwitchLabel>
      <StyledToggleSwitchInput
        type="checkbox"
        checked={selected}
        onChange={onChange}
      />
      <StyledToggleSwitchSlider checked={selected} />
    </StyledToggleSwitchLabel>
  );
};

export const SearchBox = ({ passive, searchTerm, setSearchTerm }) =>
  passive ? null : (
    <StyledSearchBoxContainer>
      <StyledSearchBoxLabel htmlFor="search">Search</StyledSearchBoxLabel>
      <StyledSearchBoxInput
        id="search"
        type="text"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </StyledSearchBoxContainer>
  );

const PAGE_SIZE_OPTIONS = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 250,
    label: "250",
  },
  {
    value: 500,
    label: "500",
  },
  {
    value: 1000,
    label: "1000",
  },
];

export const Pagination = ({
  passive,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
  totalPages,
}) => {
  if (passive) return null;
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <StyledPaginationContainer>
      <StyledPaginationButton
        disabled={!hasPreviousPage}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </StyledPaginationButton>
      <StyledPaginationButton
        disabled={!hasNextPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </StyledPaginationButton>
      <StyledPaginationSelect
        value={pageSize}
        onChange={({ target }) => setPageSize(parseInt(target.value))}
      >
        {PAGE_SIZE_OPTIONS.map(({ value, label, disabled }, index) => (
          <option key={index} value={value} disabled={disabled}>
            {label}
          </option>
        ))}
      </StyledPaginationSelect>
      <StyledPaginationPageInfo>
        {currentPage} / {totalPages}
      </StyledPaginationPageInfo>
    </StyledPaginationContainer>
  );
};

export const TableSummary = ({
  fieldOptions,
  passive,
  data,
  searchTerm,
  filters,
  sort,
  lengthOfFilteredData,
}) => {
  if (passive) return null;

  const getFilterHeaderName = (fn) =>
    fieldOptions.find(({ fieldName, filterFieldName }) =>
      filterFieldName ? filterFieldName === fn : fieldName === fn
    ).headerName;

  const getSortedHeaderName = (fn) =>
    fieldOptions.find(({ fieldName, sortFieldName }) =>
      sortFieldName ? sortFieldName === fn : fieldName === fn
    ).headerName;

  const filterMessage =
    filters.length > 0
      ? filters
          .map(({ field, value }) => `${getFilterHeaderName(field)}: ${value}`)
          .join(" and ")
      : "";

  const sortMessage = sort.field
    ? `Sorted by ${getSortedHeaderName(sort.field)} ${sort.direction}`
    : "";

  return (
    <StyledTableSummaryContainer>
      <StyledTableSummaryRow>
        <StyledTableSummaryColumn content={true}>
          Total {data.length} rows
        </StyledTableSummaryColumn>
        <StyledTableSummaryColumn content={filters.length > 0}>
          {filters.length > 0 &&
            `(${lengthOfFilteredData} rows after filter and search)`}
        </StyledTableSummaryColumn>
        <StyledTableSummaryColumn content={searchTerm !== ""}>
          {searchTerm !== "" ? `Searched for ${searchTerm}` : ""}
        </StyledTableSummaryColumn>
      </StyledTableSummaryRow>
      <StyledTableSummaryRow>
        <StyledTableSummaryColumn content={filterMessage !== ""}>
          {filterMessage !== "" ? `Filtered by ${filterMessage}` : ""}
        </StyledTableSummaryColumn>
        <StyledTableSummaryColumn content={sortMessage !== ""}>
          {sortMessage}
        </StyledTableSummaryColumn>
      </StyledTableSummaryRow>
    </StyledTableSummaryContainer>
  );
};
