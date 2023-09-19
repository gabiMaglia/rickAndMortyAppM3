let http = require("node:http");
const getCharById = require("./controllers/GetCharById");
const trimId = require("./utils/trimIdFromUrl");
// const data = require("./utils/data");
const PORT = 3001;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { url } = req;

  if (url.includes("/rickandmorty/character")) {
    const id = trimId.trimId(url);
    getCharById.getCharById(res, id);
    return;
  }

  res.writeHead(404, { "Content-type": "text/plain" });
  return res.end("Chracter not found");
});
server.listen(PORT, "localhost");

module.exports = server;
