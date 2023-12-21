import React from "react";
import { TableProvider } from "./table.context";
import {
  TopSection,
  HeaderSection,
  BodySection,
  FooterSection,
} from "./components";
import { StyledTable, StyledTableContainer } from "./styled-components";

const Table = ({ options, data = [] }) => {
  return (
    <TableProvider options={options} data={data}>
      <StyledTableContainer>
        <StyledTable>
          <TopSection />
          <HeaderSection />
          <BodySection />
          <FooterSection />
        </StyledTable>
      </StyledTableContainer>
    </TableProvider>
  );
};

export default Table;
