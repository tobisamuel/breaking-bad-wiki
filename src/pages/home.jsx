import { Link } from "react-router-dom";
import { FaSearch, FaUsers } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <h1 className="font-bold text-xl text-green-700 sm:text-2xl md:text-3xl">
        Welcome to the Breaking Bad Wiki
      </h1>
      <div className="flex flex-col gap-3 items-center mt-5 sm:flex-row">
        <Link to="characters">
          <div className="flex justify-center items-center w-56 h-64 bg-green-900 rounded-md overflow-hidden hover:opacity-75">
            <FaUsers className="text-6xl text-amber-400" />
          </div>
        </Link>
        <Link to="search">
          <div className="flex justify-center items-center w-56 h-64 bg-green-900 rounded-md overflow-hidden hover:opacity-75">
            <FaSearch className="text-6xl text-amber-400" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
