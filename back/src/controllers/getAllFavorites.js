const axios = require("axios");
const { Favorite } = require("../DB_connection");

const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = async (req, res) => {
//   // axios(URL + id)
//   //   .then((response) => {
//   //     const character = {
//   //       id: response.data.id,
//   //       name: response.data.name,
//   //       species: response.data.species,
//   //       image: response.data.image,
//   //       gender: response.data.gender,
//   //     };
//   //     return res.status(200).json(character);
//   //   })
//   //   .catch((error) => res.status(500).json(error.message));

//   // try {
//   //   const { id } = req.params;
//   //   const response = await axios(URL + id);
//   //   const data = response.data;

//   //   const infoCharacter = {
//   //     id: data?.id,
//   //     name: data?.name,
//   //     species: data?.species,
//   //     image: data?.image,
//   //     gender: data?.gender,
//   //   };

//   //   return res.status(200).json(infoCharacter);
//   // } catch (error) {
//   //   return res.status(500).json(error.message);
//   // }

//   //La consulta la estamos haciendo a la DB
// };

const getAllFavorites = async () => {
  try {
    const allFavorites = await Favorite.findAll();

    if (!allFavorites) throw new Error("No hay favoritos");

    return allFavorites;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { getAllFavorites };
