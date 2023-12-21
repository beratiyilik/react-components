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
} from "./../styled-components";
import { Renderer } from "./../../utilities";

/*
export const TableBody = ({
  data,
  options: { fieldOptions },
  toggle,
  isSelected,
}) => {
  return (
    <StyledTbody>
      {data.map((row, index) => (
        <StyledTr key={index}>
          {fieldOptions.map((field, index) => {
            if (field.render)
              return <StyledTd key={index}>{field.render({ row })}</StyledTd>;
            if (field.selection) {
              return (
                <StyledTd key={index}>
                  <ToggleSwitch
                    selected={isSelected(row)}
                    onChange={() => toggle(row)}
                  />
                </StyledTd>
              );
            }
            return <StyledTd key={index}>{row[field.fieldName]}</StyledTd>;
          })}
        </StyledTr>
      ))}
    </StyledTbody>
  );
};
*/

export const TableBody = ({
  data,
  options: { fieldOptions },
  toggle,
  isSelected,
}) => {
  return (
    <StyledTbody>
      {data.map((row, index) => (
        <Row
          key={index}
          row={row}
          fieldOptions={fieldOptions}
          toggle={toggle}
          isSelected={isSelected}
        />
      ))}
    </StyledTbody>
  );
};

const Row = ({ row, fieldOptions, toggle, isSelected }) => {
  return (
    <StyledTr>
      {fieldOptions.map((field, index) => (
        <Cell
          key={index}
          row={row}
          fieldOption={field}
          toggle={toggle}
          isSelected={isSelected}
        />
      ))}
    </StyledTr>
  );
};

const Cell = ({ row, fieldOption, toggle, isSelected }) => {
  const { fieldName, render, selection } = fieldOption;
  if (selection)
    return (
      <StyledTd>
        <ToggleSwitch selected={isSelected(row)} onChange={() => toggle(row)} />
      </StyledTd>
    );
  if (render)
    return <StyledTd>{Renderer({ Component: render, row })}</StyledTd>;
  return <StyledTd>{row[fieldName]}</StyledTd>;
};

const ToggleSwitch = ({ selected, onChange }) => {
  return (
    <label style={{ position: "relative" }}>
      <input type="checkbox" checked={selected} onChange={onChange} />
      <span style={{ position: "absolute", top: 0, left: 0 }}></span>
    </label>
  );
};
