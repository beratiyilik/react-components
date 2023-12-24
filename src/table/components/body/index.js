import React from "react";
import { StyledTbody } from "./../../styled-components";
import { BodyRow } from "./row.component";

export const TableBody = ({ data, options: { fieldOptions }, selection }) => {
  return (
    <StyledTbody>
      {data.map((row, index) => (
        <BodyRow
          key={index}
          row={row}
          fieldOptions={fieldOptions}
          selection={selection}
        />
      ))}
    </StyledTbody>
  );
};
