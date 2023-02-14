import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import styles from "../src/components/Cards.module.css";

function App() {
  const [characters, setCharacters] = useState([]);

  // const example = {
  //   name: "Morty Smith",
  //   species: "Human",
  //   gender: "Male",
  //   image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  // };

  function onSearch(searchCharacter) {
    console.log(searchCharacter);
    fetch(`https://rickandmortyapi.com/api/character/${searchCharacter}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const characterExists = characters.some(
            (char) => char.id === data.id
          );
          if (!characterExists) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("El personaje con ese ID ya fue agregado");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onRamdon(idAleatorio) {
    fetch(`https://rickandmortyapi.com/api/character/${idAleatorio}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const characterExists = characters.some(
            (char) => char.id === data.id
          );
          if (!characterExists) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("El personaje con ese ID ya fue agregado");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((personaje) => personaje.id !== id));
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch} onRamdon={onRamdon} />
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
