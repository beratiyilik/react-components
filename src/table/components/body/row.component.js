import React from "react";
import { StyledTr } from "./../../styled-components";
import { BodyCell } from "./cell.component";
export * from "./cell.component";
export * from "./row.component";

export const BodyRow = ({
  row,
  fieldOptions,
  selection: { toggle, isSelected },
}) => {
  return (
    <StyledTr>
      {fieldOptions.map((fieldOption, index) => (
        <BodyCell
          key={index}
          row={row}
          fieldOption={fieldOption}
          toggle={toggle}
          isSelected={isSelected}
        />
      ))}
    </StyledTr>
  );
};
