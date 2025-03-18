const express = require("express");

const app = express();

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({ limit: "16kb", extended: true }));

app.use("/api/v1/user")

module.exports = {
  app
}