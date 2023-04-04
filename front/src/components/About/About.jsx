import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.divAbout}>
      <div className={style.descriptionAbout}>
        <h2 className={style.h2About}>¡Bienvenidos!</h2>
        <h3 className={style.h3About}>
          Soy <span>Florencia Medina</span>, alumna de Soy Henry cohorte 35c
        </h3>
        <p className={style.parafoAbout}>
          Este es el proyecto integrador de Rick and Morty.
        </p>
        <p className={style.parafoAbout}>
          Tecnologías utilizadas: <span>Html - CSS - React - Redux</span>{" "}
        </p>
      </div>
      <div className={style.imageAbout}></div>
    </div>
  );
}
