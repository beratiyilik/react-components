import { useState, useMemo } from "react";

const useGrouping = (data) => {
  const [groupedBy, setGroupedBy] = useState("");

  const applyGrouping = useMemo(() => {
    if (!groupedBy || groupedBy === "") return data;

    return data.reduce((acc, item) => {
      const key = item[groupedBy];
      acc[key] = acc[key] || [];
      acc[key].push(item);
      return acc;
    }, {});
  }, [data, groupedBy]);

  return { groupedBy, setGroupedBy, data: applyGrouping };
};

export default useGrouping;
