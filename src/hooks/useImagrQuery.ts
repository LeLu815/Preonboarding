import { imagesApi } from "@/api/image.api";
import { QUERY_MAIN_IMAGES } from "@/constant/auth";
import { useQuery } from "@tanstack/react-query";

function useImagrQuery() {
  return useQuery({
    queryKey: [QUERY_MAIN_IMAGES],
    queryFn: () =>
      imagesApi.fetchRandomImages(5, {
        width: 1280,
        height: 420,
      }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24, // 24시간 (1일)
    gcTime: 1000 * 60 * 60 * 24, // 24시간 (1일)
  });
}

export default useImagrQuery;
