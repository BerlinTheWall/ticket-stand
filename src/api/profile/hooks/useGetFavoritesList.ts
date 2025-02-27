import { axiosApi } from "@/api/new-api";
import { profileListType } from "@/types/general";
import { useQuery } from "@tanstack/react-query";

export const useFavoritesList = (
  accountId: string,
  inputType: profileListType,
  options = {}
) => {
  let type = inputType === "movie" ? "movies" : "tv";
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
