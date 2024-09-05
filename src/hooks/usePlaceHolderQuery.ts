import { placeholderApi } from "@/api/placeholder.api";
import {
  PLACE_HOLDER,
  PLACE_HOLDER_COMMETS,
  ROWS_PER_PAGE,
} from "@/constant/placeholder";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
export type Post = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
export const usePostsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: [PLACE_HOLDER],
    queryFn: async ({ pageParam = 1 }) =>
      placeholderApi.fetchPosts(pageParam as number, 20),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // lastPage가 undefined일 경우를 체크
      if (!lastPage || lastPage.length < ROWS_PER_PAGE) {
        return undefined; // 더 이상 페이지가 없으면 undefined 반환
      }
      return allPages.length + 1; // 다음 페이지 번호 반환
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 1000 * 60 * 60 * 24, // 24시간 (1일)
    gcTime: 1000 * 60 * 60 * 24, // 24시간 (1일)
  });
};
export const usePostQuery = (id: number) => {
  return useQuery({
    queryKey: [
      PLACE_HOLDER,
      {
        id: id,
      },
    ],
    queryFn: () => placeholderApi.fetchPost(id),
    refetchOnWindowFocus: false,
  });
};
export const useCommentsQuery = (id: number) => {
  return useQuery({
    queryKey: [
      PLACE_HOLDER,
      PLACE_HOLDER_COMMETS,
      {
        id: id,
      },
    ],
    queryFn: () => placeholderApi.fetchPostComments(id),
    refetchOnWindowFocus: false,
  });
};
