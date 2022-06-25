import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <div className="grid md:grid-cols-4">
      <Navbar className="md:col-span-1" />

      <main className="min-h-screen p-5 bg-gray-100 md:px-8 md:col-span-3">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
