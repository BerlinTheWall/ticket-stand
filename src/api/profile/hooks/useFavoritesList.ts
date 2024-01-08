import { axiosApi } from "@/api/new-api";
import { profileListType } from "@/types/general";
import { useQuery } from "@tanstack/react-query";

export const useFavoritesList = (
  accountId: string,
  type: profileListType,
  options = {}
) => {
  const favoriteList = useQuery({
    queryKey: ["favorites", type],
    queryFn: () =>
      axiosApi({ url: `/account/${accountId}/favorite/${type}` }).then(
        (res) => res.data
      ),
    keepPreviousData: true,
    ...options,
  });

  return { ...favoriteList };
};
