import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { useDebounce } from "../../hooks";
/*
const useSearch = (data) => {
  const [searchTerm, setSearchTerm] = useState("");

  const fuseOptions = useMemo(
    () => ({
      keys: Object.keys(data[0]),
      includeScore: true,
      threshold: 0.3,
    }),
    [data]
  );

  const fuse = useMemo(() => new Fuse(data, fuseOptions), [data, fuseOptions]);

  const applySearch = useMemo(() => {
    if (!searchTerm || searchTerm === "") return data;
    return fuse.search(searchTerm).map((item) => item.item);
  }, [searchTerm, fuse, data]);

  return { searchTerm, setSearchTerm, data: applySearch };
};

export default useSearch;
*/

const useSearch = (data) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const fuseOptions = useMemo(
    () => ({
      keys: Object.keys(data[0]),
      includeScore: true,
      threshold: 0.3,
    }),
    [data]
  );

  const fuse = useMemo(() => new Fuse(data, fuseOptions), [data, fuseOptions]);

  const applySearch = useMemo(() => {
    if (!debouncedSearchTerm) return data;
    return fuse.search(debouncedSearchTerm).map((item) => item.item);
  }, [debouncedSearchTerm, fuse, data]);

  return { searchTerm, setSearchTerm, data: applySearch };
};

export default useSearch;
