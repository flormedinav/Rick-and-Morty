import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function (props) {
  const handleClick = () => {
    const idAleatorio = Math.floor(Math.random() * (800 - 1 + 1) + 1);
    props.onRamdon(idAleatorio);
  };

  return (
    <div className={style.divMayor}>
      <div className={style.imageNav}>
        <div className={style.logNav}></div>
      </div>
      <nav className={style.container}>
        <div className={style.navegacion}>
          {/* Aquí estoy generando botones para que me lleven a about y home */}
          <Link to="/" className={style.linkNav1}>
            Logout
          </Link>

          <Link to="/home" className={style.linkNav}>
            Home
          </Link>

          <Link to="/about" className={style.linkNav}>
            About
          </Link>

          <Link to="/favorites" className={style.linkNav}>
            Favorites
          </Link>
        </div>

        {/* Aqui le pasamos por props la funcion onSearch al componente Search */}
        <div className={style.search}>
          <SearchBar onSearch={props.onSearch} />
          <button onClick={handleClick} className={style.aleatoriaNav}>
            ALEATORIO
          </button>
        </div>
      </nav>
    </div>
  );
}
