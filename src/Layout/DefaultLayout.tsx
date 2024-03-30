import Sidebar from "../Component/Layout/Sidebar/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Component/Layout/Landing2/Components/navbar";
import { SidebarContext } from "./DefaultLayoutContext";

function DefaultLayout() {
  const token: any = localStorage.getItem("token");
  return (
    <SidebarContext>
      {token ? (
        <div className="w-screen h-screen bg-first overflow-hidden">
          <Navbar />
          <Sidebar nav />
          <div className="p-4 sm:ml-64 sm:mr-24 h-[calc(100%_-_80px)]">
            <Outlet />
          </div>
          <Sidebar />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </SidebarContext>
  );
}

export default DefaultLayout;
