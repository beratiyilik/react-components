import styled, { css } from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

export const StyledTh = styled.th`
  padding: 10px;
`;

export const StyledTr = styled.tr`
  &:hover {
    background-color: #ddd;
  }
  &:nth-child(even) {
  }
`;

export const StyledTd = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &:last-child {
  }
`;

export const StyledCaption = styled.caption`
  font-size: 1.5em;
  font-weight: bold;
  background-color: #475c6c;
`;

export const StyledColgroup = styled.colgroup`
  background-color: #f1f1f1;
  color: #000;
  text-align: left;
  text-transform: uppercase;
  border-bottom: 1px solid #ddd;
`;

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

export const StyledThead = styled.thead`
  color: #000;
  font-weight: bold;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #8a8583;
`;

export const StyledTbody = styled.tbody`
  color: #000;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const StyledTfoot = styled.tfoot`
  color: #000;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: #cd8b62;
`;
