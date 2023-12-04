import { axiosApi } from "@/api/new-api";
import { filteringMethod } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";

export const useDiscoverMovie = (filters = {}, options = {}) => {
  const queryParams = filteringMethod(filters);
  const discover = useQuery({
    queryKey: ["discover", filters],
    queryFn: () =>
      axiosApi({ url: `/discover/movie${queryParams}` }).then(
        (res) => res.data
      ),
    keepPreviousData: true,
    ...options,
  });

  return { ...discover };
};
