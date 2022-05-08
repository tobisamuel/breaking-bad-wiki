import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaRedo } from "react-icons/fa";
import Card from "../components/card";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      axios
        .get("https://www.breakingbadapi.com/api/character/random?limit=6")
        .then((response) => {
          setCharacters(response.data);
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  const handleReload = () => setIsLoading(true);

  return (
    <>
      <div className="flex flex-col justify-between md:flex-row">
        <h1 className="text-3xl text-green-700 font-bold">Characters</h1>
        <button className="text-green-700" onClick={handleReload}>
          <FaRedo />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && (
          <p className="mb-5 font-bold text-2xl text-amber-500 md:col-span-2 md:text-4xl lg:col-span-3">
            Loading...
          </p>
        )}
        {characters.map((character, i) => (
          <Link
            to={`/characters/${character.char_id}`}
            state={character}
            key={i}
          >
            <Card info={character} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CharactersPage;
