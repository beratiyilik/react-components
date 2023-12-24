import React from "react";
import { StyledSortButton } from "./../../styled-components";

export const Sort = ({ field, passive, sort, setSort }) =>
  passive ? null : (
    <StyledSortButton
      onClick={() => {
        setSort({
          field,
          direction:
            sort.field === field && sort.direction === "asc" ? "desc" : "asc",
        });
      }}
    >
      {sort.field === field && sort.direction === "asc" ? "▲" : "▼"}
    </StyledSortButton>
  );
