const { Favorite } = require("../DB_connection");

const postFav = async (character) => {
  try {
    const { name, status, species, gender, origin, image } = character;

    if (!name || !status || !origin || !species || !gender || !image) {
      throw new Error("Faltan datos obligatorios");
    }

    const newFav = {
      name,
      status,
      species,
      gender,
      origin,
      image,
    };

    await Favorite.create(newFav);

    return newFav;
  } catch (error) {
    return {error: error.message};
  }
};

module.exports = postFav;
