import styled, { css } from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledTh = styled.th`
  padding: 10px;
`;

export const StyledTr = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;

export const StyledTd = styled.td`
  padding: 10px;
`;

export const StyledCaption = styled.caption`
  font-size: 1.5em;
  margin-bottom: 10px;
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
`;

export const StyledThead = styled.thead`
  background-color: #f1f1f1;
  color: #000;
  font-weight: bold;
  text-align: left;
  text-transform: uppercase;
  border-bottom: 1px solid #ddd;
`;

export const StyledTbody = styled.tbody`
  color: #000;
  text-align: left;
`;

export const StyledTfoot = styled.tfoot`
  background-color: #f1f1f1;
  color: #000;
  text-align: left;
`;
