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
