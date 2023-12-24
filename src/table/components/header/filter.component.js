import React from "react";
import {
  StyledFilterContainer,
  StyledFilterInput,
} from "./../../styled-components";

export const Filter = ({ field, passive, filter, setFilter }) =>
  passive ? null : (
    <StyledFilterContainer>
      <StyledFilterInput
        type="text"
        value={filter.value}
        onChange={({ target }) => setFilter({ field, value: target.value })}
      />
    </StyledFilterContainer>
  );
