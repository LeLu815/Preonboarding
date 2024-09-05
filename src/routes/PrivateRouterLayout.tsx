import { UserInfoResponse } from "@/api/auth.api";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useAuthActions } from "@/store/auth.store";
import { AxiosResponse } from "axios";
import { Outlet, redirect, useLoaderData } from "react-router";
import api from "../api/api";
import {
  ACCESS_TOEKN,
  getDataToLocal,
  setDataToLocal,
  USER_ID,
} from "../utils/localStorage";

const PrivateRouterLayout = () => {
  const { setProfileUrl, setEmail, setNickname } = useAuthActions();
  const userData = useLoaderData() as AxiosResponse<UserInfoResponse>;

  // userData가 정의되어 있는지 확인
  if (userData && userData.data) {
    setEmail(userData.data.id);
    setNickname(userData.data.nickname);
    if (userData.data.avatar) {
      setProfileUrl(userData.data.avatar);
    }
  }
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default PrivateRouterLayout;

export const privateLoader = async (): Promise<
  Response | AxiosResponse<UserInfoResponse>
> => {
  const accessToken: string | null = getDataToLocal(ACCESS_TOEKN);
  if (!accessToken) {
    return redirect("/login");
  }
  try {
    api.auth.updateToken(accessToken);
    const data = await api.auth.getUserInfo();

    setDataToLocal(USER_ID, data.data.id);
    return data;
  } catch {
    api.auth.logout();
    return redirect("/login");
  }
};
