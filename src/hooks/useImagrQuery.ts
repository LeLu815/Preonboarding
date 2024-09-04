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
  });
}

export default useImagrQuery;
