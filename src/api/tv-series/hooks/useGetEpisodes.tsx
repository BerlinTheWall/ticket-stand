import { axiosApi } from "@/api/new-api";
import { useQuery } from "@tanstack/react-query";

export const useGetTVSeriesSeasons = (
  tvSeriesId: number,
  seasonNumber: number,
  options?: {}
) => {
  const episodes = useQuery({
    queryKey: ["episodes", tvSeriesId, seasonNumber],
    queryFn: () =>
      axiosApi({ url: `/tv/${tvSeriesId}/season/${seasonNumber}` }).then(
        (res) => res.data
      ),
    keepPreviousData: true,
    ...options,
  });

  return { ...episodes };
};
