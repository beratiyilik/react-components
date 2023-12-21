import { useState, useMemo } from "react";
import { useDebounce } from "../../hooks";

const useSort = (data) => {
  const [sort, setSort] = useState({});

  const debouncedSort = useDebounce(sort, 275);

  const applySort = useMemo(() => {
    if (!debouncedSort.field) return data;

    return [...data].sort((a, b) => {
      const [fieldA, fieldB] = [a[debouncedSort.field], b[debouncedSort.field]];
      return (
        (fieldA < fieldB ? -1 : 1) *
        (debouncedSort.direction === "asc" ? 1 : -1)
      );
    });
  }, [data, debouncedSort]);

  return { sort, setSort, data: applySort };
};

export default useSort;
