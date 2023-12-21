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

export const TableBody = ({ processedData, fieldOptions }) => {
  return (
    <StyledTbody>
      {processedData.map((row, index) => (
        <StyledTr key={index}>
          {fieldOptions.map((field, index) => (
            <StyledTd key={index}>
              {field.render ? field.render({ row }) : row[field.fieldName]}
            </StyledTd>
          ))}
        </StyledTr>
      ))}
    </StyledTbody>
  );
};
