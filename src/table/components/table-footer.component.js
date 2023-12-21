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

export const TableFooter = ({ numberOfHeaders, components = [] }) => {
  return (
    <StyledTfoot>
      <StyledTr>
        <StyledTd colSpan={numberOfHeaders}>
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
            {components.map((component, index) => (
              <div key={index} style={{ margin: "0 10px" }}>
                <Renderer key={index} Component={component} />
              </div>
            ))}
          </div>
        </StyledTd>
      </StyledTr>
    </StyledTfoot>
  );
};
