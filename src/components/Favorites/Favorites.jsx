import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div>
      {myFavorites.map((character) => {
        return (
          <div className={styles.divCard}>
            <div className={styles.divInfo}>
              <img
                src={character.image}
                alt={character.name}
                className={styles.image}
              />

              <Link to={`/detail/${character.id}`} className={styles.link}>
                <h2 className={styles.name}>{character.name}</h2>
              </Link>

              <div className={styles.divSpeciesGender}>
                <h2 className={styles.species}>{character.species}</h2>
                <h2 className={styles.gender}>{character.gender}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
