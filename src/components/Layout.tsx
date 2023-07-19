import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import NavTabs from "./NavTabs";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-w-[320px] bg-mytheme-primary">
      <Navbar />
      <NavTabs />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
