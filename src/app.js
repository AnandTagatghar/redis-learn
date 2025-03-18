const express = require("express");
const { userRouter } = require("./routers/user.route");

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));

app.use("/api/v1/user", userRouter);

module.exports = {
  app,
};
