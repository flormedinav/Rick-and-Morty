const express = require("express");
const server = express();
const cors = require("cors");
const PORT = 3001;
const router = require("./routes/index");
const favsRouter = require("./routes/favsRouter");
const saveApiData = require("./controllers/saveApiData");
const { sequelize } = require("./DB_connection");

server.use(express.json());
server.use(cors());

server.use("/rickandmorty", router);
// server.use("/favs", favsRouter);

//Sincroniza la base de datos. Una vez que se sincroniza la base de datos recién ahi se levanta el servidor
sequelize
  .sync({ force: true })
  .then(async () => {
    // console.log(await saveApiData());
    await saveApiData();
    server.listen(PORT, () => {
      console.log(`El servidor está escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
//Cuando ya esta andando todo bien lo pasamos a false para que no se caiga y se vuelva a cargar

module.exports = server;

//CON WEB SERVER
// const http = require("http");
// const characters = require("./utils/data");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("rickandmorty/character")) {
//       // console.log(req.url.split("/").at(-1));
//       let id = req.url.split("/").at(-1);

//       // let characterFilter = characters.filter((char) => char.id === Number(id));

//       let characterFilter = characters.find((char) => char.id === Number(id));

//       res
//         .writeHead(200, { "Content-type": "application/json" })
//         .end(JSON.stringify(characterFilter));
//     }
//   })
//   .listen(3001, "localhost");

//.at() me permite agarrar posiciones específicas de un array.
//IMPORTANTE: Siempre que agarramos datos de la url son STRINGS. Por lo que al momento de comparar el id debemos pasarlo a numero para que me de correcto, sino estaria comparando una string con un numero. Ejemplo: char.id === Number(id)

//find() -> devuele el primer elemento que encuentra coincidencia. Este podrías utilizar también en lugar del filter.
//Diferencia entre find y filter. El find me retorna directamente el objeto mientras que el filter me retorna un array de una sola posición con un objeto.
