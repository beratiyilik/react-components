import React from "react";
import {
  StyledThead,
  StyledTr,
  StyledTh,
  StyledTbody,
  StyledTd,
  StyledTfoot,
  StyledCol,
  StyledColgroup,
} from "./table.styled-components";
import styled from "styled-components";
import { Pagination, TableInfo } from "./shared.components";

export const TableFooter = ({
  fieldOptions,
  pagination,
  lengthOfData,
  filters,
  sort,
  lengthOfFilteredData,
  currentPage,
  setCurrentPage,
  totalPages,
  hasPreviousPage,
  hasNextPage,
  pageSize,
  setPageSize,
}) => {
  return (
    <StyledTfoot>
      <StyledTr>
        <StyledTd colSpan={fieldOptions.length}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
              margin: "10px",
              gap: "10px",
            }}
          >
            {pagination && (
              <Pagination
                {...{
                  pagination,
                  currentPage,
                  setCurrentPage,
                  totalPages,
                  hasPreviousPage,
                  hasNextPage,
                  pageSize,
                  setPageSize,
                }}
              />
            )}
            <TableInfo
              {...{
                fieldOptions,
                lengthOfData,
                filters,
                sort,
                lengthOfFilteredData,
              }}
            />
          </div>
        </StyledTd>
      </StyledTr>
    </StyledTfoot>
  );
};
