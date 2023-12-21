import React from "react";
import {
  StyledThead,
  StyledTr,
  StyledTh,
  StyledCol,
  StyledColgroup,
} from "./table.styled-components";
import styled, { css } from "styled-components";

export const TableHeader = ({
  fieldOptions,
  filters,
  setFilter,
  sort,
  setSort,
}) => {
  return (
    <StyledThead>
      <StyledTr>
        {fieldOptions.map((fieldOption, index) => (
          <HeaderCell
            key={index}
            {...fieldOption}
            filters={filters}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
          />
        ))}
      </StyledTr>
    </StyledThead>
  );
};

const HeaderCell = ({
  fieldName,
  headerName,
  filterable,
  filterFieldName,
  filters,
  setFilter,
  sortable,
  sortFieldName,
  sort,
  setSort,
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
            fieldName={fieldName}
            sortable={sortable}
            sortFieldName={sortFieldName}
            sort={sort}
            setSort={setSort}
          />
        </div>
        <Filter
          fieldName={fieldName}
          filterable={filterable}
          filterFieldName={filterFieldName}
          filters={filters}
          setFilter={setFilter}
        />
      </div>
    </StyledTh>
  );
};

const StyledHeaderName = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Sort = ({ fieldName, sortable, sortFieldName, sort, setSort }) => {
  if (!sortable) return null;
  const _sortFieldName = fieldName || sortFieldName;
  return (
    <StyledSort>
      <button
        onClick={() => {
          setSort({
            field: _sortFieldName,
            direction:
              sort.field === _sortFieldName && sort.direction === "asc"
                ? "desc"
                : "asc",
          });
        }}
      >
        {sort.field === _sortFieldName && sort.direction === "asc" ? "▲" : "▼"}
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

const Filter = ({
  fieldName,
  filterable,
  filterFieldName,
  filters,
  setFilter,
}) => {
  if (!filterable) return null;
  const _filterFieldName = fieldName || filterFieldName;
  return (
    <StyledFilter>
      <input
        type="text"
        value={
          filters.find((filter) => filter.field === _filterFieldName)?.value
        }
        onChange={(event) => {
          const newFilters = filters.filter(
            (filter) => filter.field !== _filterFieldName
          );
          if (event.target.value) {
            newFilters.push({
              field: _filterFieldName,
              value: event.target.value,
            });
          }
          setFilter(newFilters);
        }}
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
