import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.divCards}>
      {characters ? (
        characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        ))
      ) : (
        <h3>No hay personajes</h3>
      )}
    </div>
  );
}
