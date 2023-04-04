import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.divDetail}>
      <Link to="/home">
        <button className={style.btnDetail}>Volver</button>
      </Link>
      <div className={style.masDetail}>
        <div>
          <h2 className={style.h2Detail}>Detalles:</h2>
          <h3 className={style.h3Detail}>{character?.name}</h3>
          <p className={style.pDetail}>
            <span>Status: </span>
            {character?.status}
          </p>
          <p className={style.pDetail}>
            <span>Specie: </span>
            {character?.species}
          </p>
          <p className={style.pDetail}>
            <span>Gender: </span>
            {character?.gender}
          </p>
          <p className={style.pDetail}>
            <span>Origin: </span>
            {character.origin?.name}
          </p>
        </div>
        <img
          src={character?.image}
          alt={character.name}
          className={style.imageDetail}
        />
      </div>
    </div>
  );
};

export default Detail;
