import { create } from "zustand";

interface AuthStore {
  email: string | null;
  profileUrl: string | null;
  actions: {
    setEmail: (email: string) => void;
    setProfileUrl: (url: string) => void;
  };
}

const useAuthCreateStore = create<AuthStore>((set) => ({
  email: null,
  profileUrl: null,
  actions: {
    setEmail: (email) =>
      set({
        email: email,
      }),
    setProfileUrl: (url) =>
      set({
        profileUrl: url,
      }),
  },
}));

// atomic 설렉터
export const useEmail = () => useAuthCreateStore((state) => state.email);
export const useProfileUrl = () =>
  useAuthCreateStore((state) => state.profileUrl);

// actions 분리
export const useAuthActions = () =>
  useAuthCreateStore((state) => state.actions)

export default useAuthCreateStore;
