import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <SideBar  />

      <div className="flex-1 flex flex-col max-w-[90vw] md:max-w-[85vw] mx-auto text-lg md:text-xl">
        <NavBar  />

        <main className="flex-1 py-20 md:py-0 md:pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
