import { useState, useMemo } from "react";
import { multipleGroupBy } from "./../../utilities";

const useGrouping = (data) => {
  const [keys, setKeys] = useState([]);

  const groupedData = useMemo(() => {
    if (keys.length === 0) return data;
    return multipleGroupBy(data, keys);
  }, [data, keys]);

  return { data: groupedData, keys, setKeys };
};

export default useGrouping;
