import { axiosApi } from "@/api/new-api";
import { useQuery } from "@tanstack/react-query";

export const useLists = (accountId: string, options = {}) => {
  const lists = useQuery({
    queryKey: ["lists"],
    queryFn: () =>
      axiosApi({ url: `/account/${accountId}/lists` }).then((res) => res.data),
    keepPreviousData: true,
    ...options,
  });

  return { ...lists };
};
