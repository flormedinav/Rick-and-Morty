import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={styles.nav}>
      <input type="search" />
      <button
        onClick={() => props.onSearch("characterID")}
        className={styles.btnSearch}
      >
        Agregar
      </button>
    </div>
  );
}
