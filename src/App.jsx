import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/home";
import CharactersPage from "./pages/characters";
import Character from "./pages/character";
import SearchCharacters from "./pages/search";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="characters" element={<CharactersPage />} />
        <Route path="characters/:characterId" element={<Character />} />
        <Route path="search" element={<SearchCharacters />} />
      </Route>
    </Routes>
  );
}

export default App;
