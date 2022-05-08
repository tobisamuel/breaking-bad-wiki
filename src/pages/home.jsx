import { Link } from "react-router-dom";
import { FaSearch, FaUsers } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl text-green-700 font-bold">Home Page</h1>
      <div className="flex mt-5">
        <Link to="characters">
          <div className="flex justify-center items-center w-56 h-64 bg-green-900 rounded-md overflow-hidden hover:opacity-75">
            <FaUsers className="text-6xl text-white" />
          </div>
        </Link>
        <Link to="search">
          <div className="ml-3 flex justify-center items-center w-56 h-64 bg-green-900 rounded-md overflow-hidden hover:opacity-75">
            <FaSearch className="text-6xl text-white" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
