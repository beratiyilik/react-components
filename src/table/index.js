import React, { useEffect, useMemo } from "react";
import {
  TableHeader,
  TableBody,
  TableFooter,
  Pagination,
  AllFilter,
} from "./components";
import { TableProvider, useTable } from "./table.context";
import {
  StyledTable,
  StyledTableContainer,
  StyledCaption,
  StyledColgroup,
  StyledCol,
} from "./components";

const TableContainer = () => {
  const {
    // data,
    name,
    fieldOptions,
    pagination,
    allFilter,
    lengthOfData,
    filters,
    setFilters,
    sort,
    setSort,
    lengthOfFilteredData,
    processedData,
    ...restOfPagination
  } = useTable();

  const memoizedTableHeader = useMemo(
    () => (
      <TableHeader
        fieldOptions={fieldOptions}
        filters={filters}
        setFilter={setFilters}
        sort={sort}
        setSort={setSort}
      />
    ),
    [fieldOptions, filters, setFilters, sort, setSort]
  );
  const memoizedTableBody = useMemo(
    () => (
      <TableBody processedData={processedData} fieldOptions={fieldOptions} />
    ),
    [processedData, fieldOptions]
  );
  const memoizedTableFooter = useMemo(
    () => (
      <TableFooter
        fieldOptions={fieldOptions}
        pagination={pagination}
        lengthOfData={lengthOfData}
        filters={filters}
        sort={sort}
        lengthOfFilteredData={lengthOfFilteredData}
        {...restOfPagination}
      />
    ),
    [
      fieldOptions,
      pagination,
      lengthOfData,
      filters,
      sort,
      lengthOfFilteredData,
      restOfPagination,
    ]
  );

  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledCaption>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <div>{name}</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AllFilter
                allFilter={allFilter}
                filters={filters}
                setFilter={setFilters}
              />
              <Pagination pagination={pagination} {...restOfPagination} />
            </div>
          </div>
        </StyledCaption>
        <StyledColgroup>
          {fieldOptions.map(({ width, color }, index) => (
            <StyledCol key={index} span={"1"} width={width} color={color} />
          ))}
        </StyledColgroup>
        {memoizedTableHeader}
        {memoizedTableBody}
        {memoizedTableFooter}
      </StyledTable>
    </StyledTableContainer>
  );
};

const Table = ({ options, data = [] }) => {
  return (
    <TableProvider options={options} data={data}>
      <TableContainer />
    </TableProvider>
  );
};

export default Table;
