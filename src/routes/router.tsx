import DetailPage from "@/pages/DetailPage";
import MyPage from "@/pages/MyPage";
import SearchPage from "@/pages/SearchPage";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import JoinPage from "../pages/JoinPage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import DefaultLayout from "./DefaultLayout";
import PrivateRouterLayout, { privateLoader } from "./PrivateRouterLayout";
import PublicRouterLayout, { publicLoader } from "./PublicRouterLayout";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        element: <PublicRouterLayout />,
        loader: publicLoader,
        children: [
          { path: "/login", element: <LoginPage /> },
          { path: "/join", element: <JoinPage /> },
        ],
      },
      {
        element: <PrivateRouterLayout />,
        loader: privateLoader,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/my", element: <MyPage /> },
          { path: "/search", element: <SearchPage /> },
          { path: "/post/:id", element: <DetailPage /> },
        ],
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
