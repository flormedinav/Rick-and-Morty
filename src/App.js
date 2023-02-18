import style from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error404 from "./components/Error404/Error404";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "./redux/actions";

// import SearchBar from "./components/Nav/SearchBar";
// import styles from "../src/components/Cards/Cards.module.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = "flormedinav7@gmail.com";
  const password = "123asd";
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

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
    dispatch(deleteFavorite(id));
  }

  return (
    <div className={style.divApp}>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} onRamdon={onRamdon} />
      )}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="detail/:detailId" element={<Detail />} />
        {location.pathname !== "/" && <Route path="*" element={<Error404 />} />}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
