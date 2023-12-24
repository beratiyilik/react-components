import React, { useMemo } from "react";
import { SearchBox } from "..";
import { useTable } from "../../table.context";
import {
  StyledCaption,
  StyledCol,
  StyledColgroup,
} from "../../styled-components";
import { ComponentRenderer } from "../../../utilities";

export const TopSection = () => {
  const {
    data,
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
                <ComponentRenderer key={index} component={component} />{" "}
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
