// should return query string with given filter object
export const filteringMethod = (filterItems: any) => {
  let queryParams = "";
  let isNeedSort = false;
  let hasLength = Object.keys(filterItems).length !== 0;
  // if empty
  if (!hasLength) {
    return "";
  }
  if (hasLength) {
    queryParams = queryParams + "?";
  }

  if (isNeedSort && hasLength) {
    queryParams = queryParams + "&";
  }

  Object.keys(filterItems).forEach((item, i) => {
    if (!filterItems[item]) {
      return;
    }
    if (i !== 0) {
      queryParams = queryParams + "&";
    }
    queryParams = queryParams + item + "=" + filterItems[item];
  });

  return queryParams;
};

// Filter objects and remove null, undefined and empty values
export const filterObject = (obj: any): any => {
  const filteredObject: any = {};

  for (const key in obj) {
    const value = obj[key];

    // Check if the value is not null, undefined, or an empty string
    if (
      value !== null &&
      value !== undefined &&
      value !== "" &&
      !Array.isArray(value)
    ) {
      filteredObject[key] = value;
    }
  }

  return filteredObject;
};
