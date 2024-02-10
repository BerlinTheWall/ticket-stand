import { axiosApi } from "@/api/new-api";
import { HookApiResponseType } from "@/types/hookApiResponseType";
import { ListsType } from "@/types/list";
import { PaginatedList } from "@/types/paginated-list";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useLists = (
  accountId: string,
  options?: HookApiResponseType<PaginatedList<ListsType>>
) => {
  const lists = useQuery<PaginatedList<ListsType>, Error>({
    queryKey: ["lists", accountId],
    queryFn: () =>
      axiosApi({ url: `/account/${accountId}/lists` }).then((res) => res.data),
    keepPreviousData: true,
    ...options,
  });

  return { ...lists };
};
