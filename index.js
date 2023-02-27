const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT ||3010;
const middleware = jsonServer.defaults();
server.use(router);
server.use(middleware);
server.listen(port)