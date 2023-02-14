import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default function (props) {
  const handleClick = () => {
    const idAleatorio = Math.floor(Math.random() * (800 - 1 + 1) + 1);
    props.onRamdon(idAleatorio);
  };

  return (
    <div>
      {/* Aqui le pasamos por props la funcion onSearch al componente Search */}
      <SearchBar onSearch={props.onSearch} />
      <button onClick={handleClick}>Aleatorio</button>
    </div>
  );
}
