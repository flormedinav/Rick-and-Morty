import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [searchCharacter, setSearchCharacter] = useState("");

  const handleChangeSearch = (event) => {
    console.log(event.target.value);
    setSearchCharacter(event.target.value);
  };

  return (
    <div className={styles.nav}>
      <input
        type="search"
        value={searchCharacter}
        onChange={handleChangeSearch}
      />
      <button
        onClick={() => {
          props.onSearch(searchCharacter);
          setSearchCharacter("");
        }}
        className={styles.btnSearch}
      >
        AGREGAR
      </button>
    </div>
  );
}
