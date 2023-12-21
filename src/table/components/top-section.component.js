import React, { useMemo } from "react";
import { TableHeader, TableBody, TableFooter, Pagination, SearchBox } from ".";
import { useTable } from "../table.context";
import {
  StyledTable,
  StyledTableContainer,
  StyledCaption,
  StyledCol,
  StyledColgroup,
} from "../styled-components";
import { Renderer } from "../../utilities";

export const TopSection = () => {
  const {
    // data,
    lengthOfData,
    options: {
      name,
      fieldOptions = [],
      pagination,
      searchable,
      headerComponents = [],
    },
    search: { searchTerm, setSearchTerm, data: searchedData },
    filters: { filters, setFilters, data: filteredData },
    sort: { sort, setSort, data: sortedData },
    pagination: {
      data: paginatedData,
      component: memoizedPaginationComponent,
      ...restOfPagination
    },
  } = useTable();

  const memoizedSearchBox = useMemo(
    () => (
      <SearchBox
        passive={!searchable}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    ),
    [searchable, searchTerm, setSearchTerm]
  );

  /*
  const memoizedPaginationComponent = useMemo(
    () => <Pagination passive={!pagination} {...restOfPagination} />,
    [pagination, restOfPagination]
  );
  */

  const components = [
    ...headerComponents,
    memoizedSearchBox,
    memoizedPaginationComponent,
  ];

  return (
    <>
      <StyledCaption>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <div>{name}</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {components.map((component, index) => (
              <div key={index} style={{ margin: "0 10px" }}>
                <Renderer key={index} Component={component} />{" "}
              </div>
            ))}
          </div>
        </div>
      </StyledCaption>
      <StyledColgroup>
        {fieldOptions.map(({ width, color }, index) => (
          <StyledCol key={index} span={"1"} width={width} color={color} />
        ))}
      </StyledColgroup>
    </>
  );
};
