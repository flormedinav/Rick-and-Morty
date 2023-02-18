// import { useState } from "react";
// import characters from "../data";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Card({ name, species, gender, image, onClose, id }) {
  //destructoramos los datos porque sabemos cuales son. Otra forma sería poner props.name
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(
        addFavorite({
          name,
          species,
          gender,
          image,
          onClose,
          id,
        })
      );
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.divCard}>
      <div className={styles.btnCards}>
        <div>
          {isFav ? (
            <button onClick={handleFavorite} className={styles.btnFav}>
              ❤️
            </button>
          ) : (
            <button onClick={handleFavorite} className={styles.btnFav}>
              🤍
            </button>
          )}
        </div>

        <div>
          <button onClick={onClose} className={styles.btn}>
            X
          </button>
        </div>
      </div>

      <div className={styles.divInfo}>
        <img src={image} alt={name} className={styles.image} />
        <Link to={`/detail/${id}`} className={styles.link}>
          <h2 className={styles.name}>{name}</h2>
        </Link>

        <div className={styles.divSpeciesGender}>
          <h2 className={styles.species}>{species}</h2>
          <h2 className={styles.gender}>{gender}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
