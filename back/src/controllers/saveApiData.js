const axios = require("axios");
const { Character } = require("../DB_connection");

const getApiData = async () => {
  try {
    let i = 1;
    let characters = []; //[Promise<pending>,Promise<pending>,Promise<pending>,Promise<pending>,Promise<pending>]

    while (i < 6) {
      let apiData = await axios(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );

      //El llamado a la api me devuelve una promesa, entonces lo que tengo en charactaers un array de promesas
      characters.push(apiData);
      i++;
    }

    characters = (await Promise.all(characters)).map((res) =>
      res.data.results.map((char) => {
        return {
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin.name,
          image: char.image,
        };
      })
    );
    //Aqui voy a tener un array donde va a estar la información de la api, le aplico promise all para que se resuelvan todas las promesas. Y después lo mapeo.

    //OJO QUE AL APLICAR DOS MAP OBTENGO UN ARRAY DENTRO DE OTRO ARRAY.
    //Una forma de solucinarlo es:
    let allCharacters = [];
    characters.map((char) => {
      allCharacters = allCharacters.concat(char);
    });

    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    await Character.bulkCreate(allCharacters);

    //bulkCreate nos permite pasarle un array de objetos y los crea todos juntos en la DB
    return allCharacters;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = saveApiData;
