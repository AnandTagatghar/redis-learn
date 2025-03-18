const fs = require("fs");

const DB_NAME = "redis-learn";
const sslOptions = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert")
}

module.exports = { DB_NAME, sslOptions };