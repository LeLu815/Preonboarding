import { Outlet, redirect } from "react-router";
import api from "../api/api";
import {
  ACCESS_TOEKN,
  getDataToLocal,
  setDataToLocal,
  USER_ID,
} from "../utils/localstorage";

const PrivateRouterLayout = () => {
  return <Outlet />;
};

export default PrivateRouterLayout;

export const privateLoader = async (): Promise<Response | null> => {
  const accessToken: string | null = getDataToLocal(ACCESS_TOEKN);
  if (!accessToken) {
    return redirect("/login");
  }
  try {
    api.auth.updateToken(accessToken);
    const data = await api.auth.getUserInfo();
    setDataToLocal(USER_ID, data.data.id);
    return null;
  } catch {
    api.auth.logout();
    return redirect("/login");
  }
};
