import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Characters", href: "/characters" },
  { name: "Search", href: "/search" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav className="text-right px-5 py-2">
        <div className="flex justify-between py-2 md:py-0 md:justify-end">
          <div
            className="flex items-center text-2xl text-green-700 md:hidden"
            onClick={() => setShow(!show)}
          >
            <FaBars />
          </div>
          <h1 className="font-extrabold text-2xl text-green-700">
            <Link to="/">Breaking Bad Wiki</Link>
          </h1>
        </div>

        <ul className="hidden md:block text-amber-500">
          {navigation.map((item, i) => (
            <li
              className="text-xl font-bold hover:font-extrabold hover:text-amber-800"
              key={i}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive && "font-extrabold text-amber-800"
                }
                onClick={() => setShow(!show)}
              >
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <div
          className={`absolute top-0 left-0 min-h-screen w-full bg-white flex flex-col items-center space-y-60 transform ${
            show ? "" : "-translate-y-full"
          } transition duration-200 ease-in-out md:hidden`}
        >
          <div
            className="w-full flex justify-start p-5 text-2xl text-green-700 md:hidden"
            onClick={() => setShow(!show)}
          >
            <FaTimes />
          </div>
          <ul>
            {navigation.map((item, i) => (
              <li
                className="text-xl text-amber-500 font-bold hover:font-extrabold hover:text-amber-8100"
                key={i}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive && "font-extrabold text-amber-800"
                  }
                  onClick={() => setShow(!show)}
                >
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
