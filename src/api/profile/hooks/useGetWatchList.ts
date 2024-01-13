import { axiosApi } from "@/api/new-api";
import { profileListType } from "@/types/general";
import { useQuery } from "@tanstack/react-query";

export const useWatchList = (
  accountId: string,
  inputType: profileListType,
  options = {}
) => {
  let type = inputType === "movie" ? "movies" : "tv";
  const watchList = useQuery({
    queryKey: ["watchlist", type],
    queryFn: () =>
      axiosApi({ url: `/account/${accountId}/watchlist/${type}` }).then(
        (res) => res.data
      ),
    keepPreviousData: true,
    ...options,
  });

  return { ...watchList };
};
