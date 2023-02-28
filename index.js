const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT ||3010;
const middleware = jsonServer.defaults();
const cors = require("cors");
server.use(cors())
server.use(router);
server.use(middleware);
server.listen(port)