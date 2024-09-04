import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router";

function DefaultLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
      <Toaster />
    </div>
  );
}

export default DefaultLayout;
