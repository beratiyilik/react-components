import React from "react";
import styled from "styled-components";
import {
  StyledThead,
  StyledTr,
  StyledTh,
  StyledCol,
  StyledColgroup,
} from "./../styled-components";

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
        onChange={({ target }) => setPageSize(parseInt(target.value))}
      >
        {PAGE_SIZE_OPTIONS.map(({ value, label, disabled }, index) => (
          <option key={index} value={value} disabled={disabled}>
            {label}
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

export const SearchBox = ({ passive, searchTerm, setSearchTerm }) => {
  if (passive) return null;

  return (
    <StyledSearchBox>
      <label>Search</label>
      <input
        type="text"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </StyledSearchBox>
  );
};

const StyledSearchBox = styled.div`
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
  passive,
  lengthOfData,
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
    <StyledTableInfo>
      <div
        style={{
          margin: "3px 0",
          padding: "1px 5px",
          borderBottom: "1px solid #eee",
        }}
      >
        Total {lengthOfData} rows
        {filters.length > 0 &&
          `(${lengthOfFilteredData} rows after filter and search)`}
      </div>
      <div
        style={{
          margin: "3px 0",
          padding: "1px 5px",
          borderBottom: "1px solid #eee",
        }}
      >
        {filterMessage !== "" ? `Filtered by ${filterMessage}` : ""}{" "}
        {searchTerm !== "" ? `Searched for ${searchTerm}` : ""}
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

export const Filter = ({ field, passive, filter, setFilter }) => {
  if (passive) return null;
  return (
    <StyledFilter>
      <input
        type="text"
        value={filter.value}
        onChange={({ target }) => setFilter({ field, value: target.value })}
      />
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  input {
    padding: 5px;
    border: none;
    border-radius: 5px;
  }
`;

export const Sort = ({ field, passive, sort, setSort }) => {
  if (passive) return null;
  return (
    <StyledSort>
      <button
        onClick={() => {
          setSort({
            field,
            direction:
              sort.field === field && sort.direction === "asc" ? "desc" : "asc",
          });
        }}
      >
        {sort.field === field && sort.direction === "asc" ? "▲" : "▼"}
      </button>
    </StyledSort>
  );
};

const StyledSort = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #f1f1f1;
    cursor: pointer;
    &:disabled {
      color: #aaa;
      cursor: not-allowed;
    }
  }
`;

export const HeaderCell = ({
  fieldName,
  headerName,
  filterable,
  filterFieldName,
  filter,
  setFilter,
  sortable,
  sortFieldName,
  sort,
  setSort,
  selection,
  headerSelection,
}) => {
  return (
    <StyledTh>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <StyledHeaderName>{headerName || fieldName}</StyledHeaderName>
          <Sort
            field={sortFieldName || fieldName}
            passive={!sortable}
            sort={sort}
            setSort={setSort}
          />
        </div>
        <Filter
          field={filterFieldName || fieldName}
          passive={!filterable}
          filter={filter}
          setFilter={setFilter}
        />
        {selection && headerSelection}
      </div>
    </StyledTh>
  );
};

const StyledHeaderName = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
