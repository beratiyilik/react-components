import React, { createContext, useContext, useMemo } from "react";
import {
  useSearch,
  useFilters,
  useSort,
  usePagination,
  useSelection,
} from "./hooks";
import { Pagination } from "./components";

const TableContext = createContext();

export const TableProvider = ({ children, options, data /* , setData */ }) => {
  const {
    name,
    fieldOptions,
    searchable,
    pagination: hasPagination = true,
    identifier,
  } = options;

  const { data: searchedData, ...restOfSearch } = useSearch(data);
  const { data: filteredData, ...restOfFilters } = useFilters(searchedData);
  const { data: sortedData, ...restOfSort } = useSort(filteredData);
  const pagination = usePagination(sortedData);

  const memoizedPagination = useMemo(
    () => <Pagination {...pagination} passive={!hasPagination} />,
    [pagination, hasPagination]
  );

  const selectionIdentifier = fieldOptions.find(
    ({ selection }) => selection
  )?.selectionIdentifier;
  const predictiveIdentifier =
    getPredictiveIdentifier(selectionIdentifier) ||
    getPredictiveIdentifier(identifier) ||
    DEFAULT_PREDICTIVE_IDENTIFIER;
  const selection = useSelection(data, predictiveIdentifier);

  const value = {
    options,
    data,
    // setData,
    search: {
      ...restOfSearch,
      data: searchedData,
    },
    filters: {
      ...restOfFilters,
      data: filteredData,
    },
    sort: {
      ...restOfSort,
      data: sortedData,
    },
    pagination: {
      ...pagination,
      component: memoizedPagination,
    },
    selection,
    processedData: pagination.data,
  };

  return <TableContext.Provider children={children} value={value} />;
};

export const useTable = () => useContext(TableContext);

// TODO: move this to a separate file
const DEFAULT_PREDICTIVE_IDENTIFIER = (row) => (value, index, array) =>
  value.id === row.id;

const getPredictiveIdentifier = (identifier) =>
  typeof identifier === "function"
    ? identifier
    : typeof identifier === "string"
    ? (row) => (value, index, array) => value[identifier] === row[identifier]
    : null;
