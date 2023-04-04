const axios = require("axios");
const { Favorite } = require("../DB_connection");

const URL = "https://rickandmortyapi.com/api/character/";

// const getCharDetail = async (req, res) => {
//   // const { detailId } = req.params;

//   // axios(URL + detailId)
//   //   .then((response) => {
//   //     const character = {
//   //       id: response.data.id,
//   //       name: response.data.name,
//   //       species: response.data.species,
//   //       image: response.data.image,
//   //       gender: response.data.gender,
//   //       origin: response.data.origin,
//   //       status: response.data.status,
//   //     };
//   //     return res.status(200).json(character);
//   //   })
//   //   .catch((error) => res.status(500).json(error.message));
//   try {
//     const { detailId } = req.params;

//     const response = (await axios(URL + detailId)).data;
//     //const {data} = await axios(URL + detailId) -> Otra forma de hacerlo

//     const infoCharacterDetail = {
//       id: response?.id,
//       name: response?.name,
//       species: response?.species,
//       image: response?.image,
//       gender: response?.gender,
//       origin: response.origin?.name,
//       status: response?.status,
//     };

//     return res.status(200).json(infoCharacterDetail);
//   } catch (error) {
//     (error) => res.status(500).json(error.message);
//   }
// };

const deleteFavoriteById = async (id) => {
  try {
    const favoriteFinded = await Favorite.findByPk(id);

    if (!favoriteFinded) throw new Error("No hay favorito con ese id");

    favoriteFinded.destroy();

    return "Favorito eliminado correctamente";
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { deleteFavoriteById };
