import { axiosApi } from "@/api/new-api";
import { filteringMethod } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetList = (listId: string, filters = {}, options?: {}) => {
  const queryParams = filteringMethod(filters);

  const list = useQuery({
    queryKey: ["list", listId],
    queryFn: () =>
      axiosApi({ url: `list/${listId}${queryParams}` }).then((res) => res.data),
    keepPreviousData: true,
    ...options,
  });

  return { ...list };
};
