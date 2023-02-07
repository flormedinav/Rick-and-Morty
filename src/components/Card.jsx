import { useState } from "react";
import characters from "../data";
import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose }) {
  //destructoramos los datos porque sabemos cuales son. Otra forma sería poner props.name
  return (
    <div className={styles.divCard}>
      <button onClick={onClose} className={styles.btn}>
        X
      </button>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.divSpeciesGender}>
        <h2 className={styles.species}>{species}</h2>
        <h2 className={styles.gender}>{gender}</h2>
      </div>

      <img src={image} alt={name} className={styles.image} />
    </div>
  );
}

// export default function Card(props) {
//    const [show, setShow] = useState(true);

//    if(!show) {
//       return (
//          <div>
//            <button onClick={() => setShow(true)}>Mostrar</button>
//          </div>
//        );
//    }

//    return (
//       <div>
//          <button onClick={() => setShow(false)}>X</button>
//          <h2>{props.name}</h2>
//          <h2>{props.species}</h2>
//          <h2>props.gender</h2>
//          <img  src={props.image} alt="" />
//       </div>
//    );
// }

// En la línea const [show, setShow] = useState(true); se está utilizando la función useState de React para definir un estado local para el componente Card. La función useState devuelve un par de valores: un valor que representa el estado actual y una función para actualizar el estado.

// Al hacer const [show, setShow] = useState(true);, se está desempaquetando el resultado de useState en dos variables:

// show: representa el estado actual y se inicializa en true.
// setShow: es una función que puedes usar para actualizar el estado.
// Estos dos valores (show y setShow) se pueden usar en el componente para controlar la visibilidad del componente. Por ejemplo, en el código anterior, si show es false, entonces el componente no se muestra. Al hacer clic en el botón, se llama a setShow(false), lo que cambia el valor de show a false.

//Para darle la opción de volver a mostrar el componente, puedes agregar otro botón que cambie el estado de show a true al hacer clic en él.

//En este ejemplo, si show es false, se muestra un botón que, al hacer clic en él, llama a setShow(true) para cambiar el estado a true y mostrar el componente Card de nuevo. Si show es true, se muestra un botón que, al hacer clic en él, llama a setShow(false) para cambiar el estado a false y ocultar el componente Card.
