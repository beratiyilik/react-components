import React from "react";
import { StyledTd } from "./../../styled-components";
import { ToggleSwitch } from "./../shared.components";
import { ComponentRenderer } from "./../../../utilities";

export const BodyCell = ({ row, fieldOption, toggle, isSelected }) => {
  const { fieldName, render, selection } = fieldOption;
  if (selection)
    return (
      <StyledTd>
        <ToggleSwitch selected={isSelected(row)} onChange={() => toggle(row)} />
      </StyledTd>
    );
  return (
    <StyledTd>
      {ComponentRenderer({ component: render ? render : row[fieldName], row })}
    </StyledTd>
  );
};
