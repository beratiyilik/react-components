import styled, { css } from "styled-components";

export const StyledTable = styled.table`
  position: relative;
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
  border-collapse: separate;
`;

export const StyledTh = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const StyledTr = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const StyledTd = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;

  &:last-child {
    text-align: right;
  }
`;

export const StyledCaption = styled.caption`
  padding: 8px;
  text-align: left;
  font-weight: bold;
`;

export const StyledColgroup = styled.colgroup``;

export const StyledCol = styled.col`
  width: ${({ width }) =>
    css`
      ${width ? width : "auto"}
    `};
  background-color: ${({ color }) =>
    css`
      ${color ? color : "transparent"}
    `};
  color: ${({ color }) =>
    css`
      ${color ? color : "transparent"}
    `};
  text-align: ${({ align }) =>
    css`
      ${align ? align : "left"}
    `};
`;

export const StyledThead = styled.thead``;

export const StyledTbody = styled.tbody``;

export const StyledTfoot = styled.tfoot``;
