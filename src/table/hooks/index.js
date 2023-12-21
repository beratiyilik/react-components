import useSearch from "./use-search.hook";
import useFilters from "./use-filters.hook";
import useSort from "./use-sort.hook";
import usePagination from "./use-pagination.hook";
import useSelection from "./use-selection.hook";
import useGrouping from "./use-grouping.hook";

export {
  useSearch,
  useFilters,
  useSort,
  usePagination,
  useSelection,
  useGrouping,
};

const DEFAULT_PREDICTIVE_IDENTIFIER = (row) => (value, index, array) =>
  value.id === row.id;

const getPredictiveIdentifier = (identifier) =>
  typeof identifier === "function"
    ? identifier
    : typeof identifier === "string"
    ? (row) => (value, index, array) => value[identifier] === row[identifier]
    : null;

const useTableData = (data, options) => {
  const { data: searchedData, ...restOfSearch } = useSearch(data);
  const { data: filteredData, ...restOfFilters } = useFilters(searchedData);
  const { data: sortedData, ...restOfSort } = useSort(filteredData);
  const { data: paginatedData, ...restOfPagination } =
    usePagination(sortedData);

  const { identifier, fieldOptions } = options;

  const selectionIdentifier = fieldOptions.find(
    ({ selection }) => selection
  )?.selectionIdentifier;
  const predictiveIdentifier =
    getPredictiveIdentifier(selectionIdentifier) ||
    getPredictiveIdentifier(identifier) ||
    DEFAULT_PREDICTIVE_IDENTIFIER;

  const selection = useSelection(data, predictiveIdentifier);

  return {
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
      ...restOfPagination,
      data: paginatedData,
    },
    selection,
  };
};

export default useTableData;
