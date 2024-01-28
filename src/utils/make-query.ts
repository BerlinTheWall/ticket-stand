const makeQueryKey = (queryKey: string, params: Record<string, any>) => {
  return [queryKey, stringifySorted(params)];
};
export default makeQueryKey;
const stringifySorted = (params: Record<string, any>): string =>
  JSON.stringify(
    Object.keys(params)
      .sort()
      .reduce((result: Record<string, any>, key: string) => {
        result[key] = params[key];
        return result;
      }, {})
  );
