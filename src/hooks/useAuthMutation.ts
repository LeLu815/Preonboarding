import api from "@/api";
import { JoinParams, LoginParams, PatchUserParams } from "@/api/auth.api";
import { useMutation } from "@tanstack/react-query";
// join
export const useJoinMutation = () => {
  return useMutation({
    mutationFn: (variables: JoinParams) => {
      return api.auth.join(variables);
    },
  });
};

// login
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (variables: LoginParams) => {
      return api.auth.login(variables);
    },
  });
};

// profile update
export const useUpdateProfileMutation = () => {
  return useMutation({
    mutationFn: (variables: PatchUserParams) =>
      api.auth.patchUserInfo(variables),
  });
};
