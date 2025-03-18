const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/user.controller");
const { checkCache } = require("../middleware/cache.middleware");

const router = express.Router();

router.route("/register-user").post(registerUser);

router.route("/login-user").post(checkCache, loginUser);

router.route("/logout-user/:username").get(logoutUser);

module.exports = {
  userRouter: router,
};
