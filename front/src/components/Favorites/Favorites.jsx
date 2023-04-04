import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOrderCards = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilterCards = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={styles.divSelect}>
        <select onChange={handleOrderCards} className={styles.selectFav}>
          <option value="order" disabled="disabled">
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descentente">Descentente</option>
        </select>
        <select onChange={handleFilterCards} className={styles.selectFav}>
          <option value="filter" disabled="disabled">
            Filter By
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
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
