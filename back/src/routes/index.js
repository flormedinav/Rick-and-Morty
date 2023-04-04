const { Router } = require("express");
const { getAllFavorites } = require("../controllers/getAllFavorites");
const { deleteFavoriteById } = require("../controllers/deleteFavoriteById");
const { getAllChars } = require("../controllers/getAllChars");
const postFav = require("../controllers/postFav");

const router = Router();

// router.get("/character/:id", getCharById);
// router.get("/detail/:detailId", getCharDetail);
router.get("/allCharacters", async (req, res) => {
  try {
    const allCharacters = await getAllChars();

    res.status(200).json(allCharacters);
  } catch (error) {
    res.status(404).send("Hubo un problema con la DB");
  }
});

router.get("/fav", async (req, res) => {
  try {
    const allFavorites = await getAllFavorites();

    if (allFavorites.error) throw new Error(allFavorites.error);

    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.post("/fav", async (req, res) => {
  // favs.push({ ...req.body });

  try {
    const characterFav = await postFav(req.body);

    if (characterFav.error) throw new Error(characterFav.error);

    res.status(200).json(characterFav);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.delete("/fav/:id", async (req, res) => {
  // const { id } = req.params;

  // let favsFilter = favs.filter((pj) => pj.id !== parseInt(id));
  // favs = favsFilter;

  // return res.status(200).send(favs);

  try {
    const { id } = req.params;

    const deleteFavorite = await deleteFavoriteById(id);

    if (deleteFavorite.error) throw new Error(deleteFavorite.error);

    res.status(200).send(deleteFavorite);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
