import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { useDebounce } from "../../hooks";
/*
const useFilters = (data) => {
  const [filters, setFilters] = useState([]);

  const fuseOptions = useMemo(
    () => ({
      keys:
        filters.length && filters[0].field === "all"
          ? Object.keys(data[0])
          : filters.map((filter) => filter.field),
      includeScore: true,
      threshold: 0.3,
    }),
    [filters, data]
  );

  const fuse = useMemo(() => new Fuse(data, fuseOptions), [data, fuseOptions]);

  const applyFilters = useMemo(() => {
    if (!filters.length) return data;
    const searchTerm = filters.find((filter) => filter.field === "all")?.value;

    if (searchTerm) {
      return fuse.search(searchTerm).map((item) => item.item);
    } else {
      return filters.reduce((acc, filter) => {
        const result = fuse.search(filter.value);
        return acc.concat(result.map((item) => item.item));
      }, []);
    }
  }, [filters, fuse, data]);

  // const hasFilters = useMemo(() => filters.length > 0, [filters]);

  return { filters, setFilters, filteredData: applyFilters };
};

export default useFilters;
*/

/*
const useFilters = (data) => {
  const [filters, setFilters] = useState([]);

  const fuseOptions = useMemo(
    () => ({
      keys: filters.map((filter) => filter.field),
      includeScore: true,
      threshold: 0.3,
    }),
    [filters]
  );

  const fuse = useMemo(() => new Fuse(data, fuseOptions), [data, fuseOptions]);

  const applyFilters = useMemo(() => {
    if (!filters.length && filters.length < 1) return data;

    return filters.reduce((acc, filter) => {
      const result = fuse.search(filter.value);
      return acc.concat(result.map((item) => item.item));
    }, []);
  }, [filters, fuse, data]);

  // const hasFilters = useMemo(() => filters.length > 0, [filters]);

  return { filters, setFilters, data: applyFilters };
};

export default useFilters;
*/

const useFilters = (data) => {
  const [filters, setFilters] = useState([]);

  const debouncedFilters = useDebounce(filters, 300);

  const fuseOptions = useMemo(
    () => ({
      keys: debouncedFilters.map((filter) => filter.field),
      includeScore: true,
      threshold: 0.3,
    }),
    [debouncedFilters]
  );

  const fuse = useMemo(() => new Fuse(data, fuseOptions), [data, fuseOptions]);

  const applyFilters = useMemo(() => {
    if (!debouncedFilters.length && debouncedFilters.length < 1) return data;

    return debouncedFilters.reduce((acc, filter) => {
      const result = fuse.search(filter.value);
      return acc.concat(result.map((item) => item.item));
    }, []);
  }, [debouncedFilters, fuse, data]);

  return { filters, setFilters, data: applyFilters };
};

export default useFilters;
