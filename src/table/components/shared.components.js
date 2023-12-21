import React from "react";
import styled from "styled-components";

export const Pagination = ({
  pagination,
  currentPage,
  setCurrentPage,
  totalPages,
  hasPreviousPage,
  hasNextPage,
  pageSize,
  setPageSize,
}) => {
  if (!pagination) return null;
  const options = [10, 25, 50, 100];
  return (
    <StyledPagination>
      <button
        disabled={!hasPreviousPage}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        disabled={!hasNextPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
      <select
        value={pageSize}
        onChange={(event) => {
          setPageSize(parseInt(event.target.value));
        }}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            selected={option === pageSize ? "selected" : ""}
          >
            {option}
          </option>
        ))}
      </select>
      <span>
        {currentPage} / {totalPages}
      </span>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #f1f1f1;
    cursor: pointer;
    &:disabled {
      color: #aaa;
      cursor: not-allowed;
    }
  }
  select {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #f1f1f1;
    cursor: pointer;
  }
  span {
    padding: 10px;
  }
`;

export const AllFilter = ({ filters, setFilter, allFilter }) => {
  if (!allFilter) return null;

  const filter = filters.find((filter) => filter.field === "all");

  return (
    <StyledAllFilter>
      <label>Search</label>
      <input
        type="text"
        value={filter?.value}
        onChange={(event) => {
          const newFilters = filters.filter((filter) => filter.field !== "all");
          if (event.target.value) {
            newFilters.push({
              field: "all",
              value: event.target.value,
            });
          }
          setFilter(newFilters);
        }}
      />
    </StyledAllFilter>
  );
};

const StyledAllFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;

  label {
    font-weight: bold;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }
`;

export const TableInfo = ({
  fieldOptions,
  lengthOfData,
  filters,
  sort,
  lengthOfFilteredData,
}) => {
  const getFilterHeaderName = (fn) =>
    fn === "all"
      ? "All"
      : fieldOptions.find(({ fieldName, filterFieldName }) =>
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
    <StyledTableInfo>
      <div
        style={{
          margin: "3px 0",
          padding: "1px 5px",
          borderBottom: "1px solid #eee",
        }}
      >
        Showing {lengthOfFilteredData} of {lengthOfData} rows
      </div>
      <div
        style={{
          margin: "3px 0",
          padding: "1px 5px",
          borderBottom: "1px solid #eee",
        }}
      >
        {filterMessage !== "" ? `Filtered by ${filterMessage}` : ""}
      </div>
      <div
        style={{
          argin: "3px 0",
          padding: "1px 5px",
          borderBottom: "1px solid #eee",
        }}
      >
        {sortMessage}
      </div>
    </StyledTableInfo>
  );
};

const StyledTableInfo = styled.div`
display: 'flex',
flexDirection: 'column',
alignItems: 'flex-start',
padding: '5px',
border: '1px solid #ccc',
borderRadius: '4px',
margin: '5px',
backgroundColor: '#f9f9f9'
`;
