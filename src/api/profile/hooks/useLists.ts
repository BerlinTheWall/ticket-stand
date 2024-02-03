import { axiosApi } from "@/api/new-api";
import { ListsType } from "@/types/list";
import { PaginatedList } from "@/types/paginated-list";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useLists = (accountId: string, options = {}) => {
  const lists = useQuery({
    queryKey: ["lists", accountId],
    queryFn: () =>
      axiosApi({ url: `/account/${accountId}/lists` }).then(
        (res: AxiosResponse<PaginatedList<ListsType>>) => res.data
      ),
    keepPreviousData: true,
    ...options,
  });

  return { ...lists };
};
