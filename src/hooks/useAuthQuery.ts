import api from "@/api";
import { QUERY_USER } from "@/constant/auth";
import { useQuery } from "@tanstack/react-query";

function useAuthQuery() {
  return useQuery({
    queryKey: [QUERY_USER],
    queryFn: () => api.auth.getUserInfo(),
  });
}

export default useAuthQuery;
