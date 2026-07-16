import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const AdminLayout = () => {
  const [openNav, setOpenNav] = useState(true);
  return (
    <>
      <Helmet>
        <title>OrangeFarm</title>
        <link rel="icon" href="/admin-favicon.png" />
      </Helmet>
      <div className="flex font-inter p-4 gap-4 bg-col-4 overflow-hidden">
        <aside
          className={`lg:max-w-75 max-w-70 w-full bg-white rounded-2xl p-6 pb-0 h-[calc(100vh-32px)] overflow-y-auto overflow-hidden absolute transition-all duration-300 lg:relative z-20 max-lg:shadow-sm ${openNav ? "max-lg:translate-x-[-200%]" : "max-lg:translate-x-0"}`}
        >
          <Sidebar setOpenNav={setOpenNav} />
        </aside>
        <main className="w-full bg-white rounded-2xl shadow-md h-[calc(100vh-40px)] overflow-auto px-4 py-5">
          <Outlet context={{ setOpenNav }} />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
