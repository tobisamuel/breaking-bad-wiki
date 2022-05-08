import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <div className="grid md:grid-cols-4">
      <Navbar className="md:col-span-1" />

      <main className="h-screen px-12 py-5 bg-gray-100 md:col-span-3">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
