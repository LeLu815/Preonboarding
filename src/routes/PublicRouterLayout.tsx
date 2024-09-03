import { Outlet } from "react-router";
import { ACCESS_TOEKN, getDataToLocal } from "../utils/localstorage";

const PublicRouterLayout = () => {
  return <Outlet />;
};

export default PublicRouterLayout;

export const publicLoader = async (): Promise<null> => {
  const accessToken: string | null = getDataToLocal(ACCESS_TOEKN);
  if (accessToken) {
    // 이전 페이지로 돌아가기
    window.history.back();
    return null; // Promise를 반환하여 비동기 함수 종료
  }
  return null;
};
