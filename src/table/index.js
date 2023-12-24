import React from "react";
import { TableProvider } from "./table.context";
import {
  TopSection,
  HeaderSection,
  BodySection,
  FooterSection,
} from "./components";
import { StyledTable, StyledTableContainer } from "./styled-components";

const Table = ({ options, data = [] /* , setData = () => null */ }) => {
  return (
    <TableProvider options={options} data={data} /* setData={setData} */>
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
