import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router";

function DefaultLayout() {
  console.log("토스터땜에 리런더링");
  return (
    <div>
      <Outlet />
      <Toaster />
    </div>
  );
}

export default DefaultLayout;
