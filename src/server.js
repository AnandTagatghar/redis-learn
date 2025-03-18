require("dotenv").config();
const { app } = require("./app");
const { sslOptions } = require("./constant");
const { connectDB } = require("./db/connectDB");
const https = require("https");

connectDB()
  .then(() => {
    console.log(`CONNECTION success`);
    https.createServer(sslOptions, app).listen(process.env.PORT, () => {
      console.log(`Listening at Port: https://127.0.0.1:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(`CONNECTION failed: ${err}`);
  });
