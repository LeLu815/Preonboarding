import { Outlet } from "react-router";
import { ACCESS_TOEKN, getDataToLocal } from "../utils/localStorage";

const PublicRouterLayout = () => {
  return (
    <>
      <div className="py-[15px]" />
      <Outlet />
    </>
  );
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
