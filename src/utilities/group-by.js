/*
export const groupBy = (data, keys) => {
  function recursiveGroup(currentData, keyIndex) {
    if (keyIndex >= keys.length) return currentData;

    const grouped = currentData.reduce((acc, item) => {
      const key = keys[keyIndex];
      const keyValue = item[key];
      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }
      acc[keyValue].push(item);
      return acc;
    }, {});

    Object.keys(grouped).forEach((groupKey) => {
      grouped[groupKey] = recursiveGroup(grouped[groupKey], keyIndex + 1);
    });

    return grouped;
  }

  return recursiveGroup(data, 0);
};
*/

export const groupBy = (data, key) => {
  return data.reduce((acc, item) => {
    const keyValue = item[key];
    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(item);
    return acc;
  }, {});
};

export const groupByAdapter = (groupedData) =>
  Object.keys(groupedData).map((groupKey) => ({
    key: groupKey,
    count: groupedData[groupKey].length,
    data: groupedData[groupKey],
  }));

export const multipleGroupBy = (data, keys) => {
  if (keys.length === 0) return data;

  const [firstKey, ...remainingKeys] = keys;

  let groupedData = groupBy(data, firstKey);

  if (remainingKeys.length > 0)
    Object.keys(groupedData).forEach((groupKey) => {
      groupedData[groupKey] = multipleGroupBy(
        groupedData[groupKey],
        remainingKeys
      );
    });

  return groupedData;
};

export const multipleGroupByAdapter = (groupedData) => {
  const keys = Object.keys(groupedData);

  if (keys.length === 0) return [];

  return keys.map((groupKey) => ({
    key: groupKey,
    count: groupedData[groupKey].length,
    data: multipleGroupByAdapter(groupedData[groupKey]),
  }));
};
