// const { Router } = require("express");
// const { favs } = require("../utils/favs");

// const favsRouter = Router();

// favsRouter.get("/fav", (req, res) => {
//   return res.json(favs);
// });

// favsRouter.post("/fav", (req, res) => {
//   // favs.push({ ...req.body });
//   favs.push(req.body);
//   res.status(200).json({ msg: "Personaje agregado a favs", data: favs });
// });

// favsRouter.delete("/fav/:id", (req, res) => {
//   const { id } = req.params;
//   favs = favs.filter((pj) => pj.id !== Number(id));
//   return res.status(200).json({ msg: "Deleted", data: favs });
// });

// module.exports = favsRouter;
