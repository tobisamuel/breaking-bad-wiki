import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Card from "../components/card";

const api_endpoint = "https://www.breakingbadapi.com/api/characters?name=";

const useSemiPersistentState = (key, initialState) => {
  const isMounted = useRef(false);

  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    if (!isMounted) {
      isMounted.current = true;
    } else {
      localStorage.setItem(key, value);
    }
  }, [value, key]);

  return [value, setValue];
};

const charactersReducer = (state, action) => {
  switch (action.type) {
    case "CHARACTERS_FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "CHARACTERS_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "CHARACTERS_FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};

const SearchCharacters = () => {
  const [characters, dispatchCharacters] = useReducer(charactersReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "");
  const [url, setUrl] = useState(`${api_endpoint}${searchTerm}`);

  // callbacks
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    setUrl(`${api_endpoint}${searchTerm}`);
    e.preventDefault();
  };

  // memoized version of side effect callback
  const handleFetchCharacters = useCallback(() => {
    // Fetch Characters
    if (searchTerm) {
      axios
        .get(url)
        .then(dispatchCharacters({ type: "CHARACTERS_FETCH_INIT" }))
        .then((response) => {
          dispatchCharacters({
            type: "CHARACTERS_FETCH_SUCCESS",
            payload: response.data,
          });
        })
        .catch(() => dispatchCharacters({ type: "CHARACTERS_FETCH_FAILURE" }));
    } else {
      return;
    }
  }, [url]);

  // Side Effect
  useEffect(() => {
    handleFetchCharacters();
  }, [handleFetchCharacters]);

  return (
    <>
      <div className="flex flex-col justify-between md:flex-row">
        <h1 className="text-3xl text-green-700 font-bold">Search</h1>

        <form
          onSubmit={handleSearchSubmit}
          className="flex mt-3 px-2 border-2 border-amber-500 focus:outline-none focus:border-green-700 md:mt-0"
        >
          <input
            className="w-full border-none bg-transparent focus:outline-none"
            id="search"
            type="text"
            value={searchTerm}
            placeholder="Search"
            onChange={handleInputChange}
          />
          <button
            className="text-green-700 ml-2"
            type="submit"
            disabled={!searchTerm}
          >
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-x-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {characters.isError && <p>Something went wrong...</p>}
        {characters.isLoading && (
          <p className="mb-5 font-bold text-2xl text-amber-500 md:col-span-2 md:text-4xl lg:col-span-3">
            Loading...
          </p>
        )}
        {characters.isLoading || characters.data.length ? (
          characters.data.map((character, i) => (
            <Link
              to={`/characters/${character.char_id}`}
              state={character}
              key={i}
            >
              <Card info={character} />
            </Link>
          ))
        ) : (
          <h3 className="font-bold text-2xl text-amber-500 md:col-span-2 md:text-4xl lg:col-span-3">
            Search for a Character
          </h3>
        )}
      </div>
    </>
  );
};

export default SearchCharacters;
