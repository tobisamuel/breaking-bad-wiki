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
            {show ? <FaTimes /> : <FaBars />}
          </div>
          <h1 className="font-extrabold text-2xl text-green-700 ">
            <Link to="/">Breaking Bad Wiki</Link>
          </h1>
        </div>

        <ul
          className={
            show
              ? "md:block text-amber-500 mt-2"
              : "hidden md:block text-amber-500 mt-2"
          }
        >
          {navigation.map((item, i) => (
            <li
              className="text-xl font-bold hover:font-extrabold hover:text-amber-8100"
              key={i}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "font-extrabold text-amber-800" : ""
                }
                onClick={() => setShow(!show)}
              >
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
