import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks";

/*
const useSelection = (data, identifierField) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const toggle = (row) => {
    const index = selectedRows.findIndex(
      (selectedRow) => selectedRow[identifierField] === row[identifierField]
    );
    const newSelectedRows =
      index === -1
        ? [...selectedRows, row]
        : selectedRows.filter((_, i) => i !== index);
    setSelectedRows(newSelectedRows);
  };

  const toggleAllRows = () =>
    setSelectedRows(selectedRows.length === data.length ? [] : [...data]);

  const isSelected = (row) =>
    selectedRows.some(
      (selectedRow) => selectedRow[identifierField] === row[identifierField]
    );

  return {
    selectedRows,
    toggle,
    toggleAllRows,
    isSelected,
    clearSelection: () => setSelectedRows([]),
  };
};

export default useSelection;
*/

/*
const useSelection = (
  data,
  predictiveIdentifier = (row) => (value, index, array) => value.id === row.id
) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const toggle = (row) => {
    const index = selectedRows.findIndex(predictiveIdentifier(row));
    const newSelectedRows =
      index === -1
        ? [...selectedRows, row]
        : selectedRows.filter((_, i) => i !== index);
    setSelectedRows(newSelectedRows);
  };

  const isSelected = (row) => selectedRows.some(predictiveIdentifier(row));

  const isSelectedAll = data.length > 0 && data.every(isSelected);

  const toggleAll = () => {
    setSelectedRows(isSelectedAll ? [] : [...data]);
  };

  useEffect(() => {
    console.log(selectedRows);
  }, [selectedRows]);

  return {
    selectedRows,
    toggle,
    isSelected,
    toggleAll,
    isSelectedAll,
  };
};
export default useSelection;
*/

const useSelection = (
  data,
  predictiveIdentifier = (row) => (value) => value.id === row.id
) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const debouncedSelectedRows = useDebounce(selectedRows, 275);

  const toggle = (row) => {
    const index = selectedRows.findIndex(predictiveIdentifier(row));
    const newSelectedRows =
      index === -1
        ? [...selectedRows, row]
        : selectedRows.filter((_, i) => i !== index);
    setSelectedRows(newSelectedRows);
  };

  const isSelected = (row) =>
    debouncedSelectedRows.some(predictiveIdentifier(row));

  const isSelectedAll = data.length > 0 && data.every(isSelected);

  const toggleAll = () => {
    setSelectedRows(isSelectedAll ? [] : [...data]);
  };

  return {
    data: debouncedSelectedRows,
    toggle,
    isSelected,
    toggleAll,
    isSelectedAll,
  };
};

export default useSelection;
