const { setValue, delValue } = require("../db/connectRedis");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email)
      throw new ApiError(404, "Required fields missing");

    const checkUserAvailable = await User.find({
      $or: [{ username }, { email }],
    });

    console.log(checkUserAvailable);

    if (checkUserAvailable.length)
      throw new ApiError(400, "User already available");

    const user = await User.create({
      username,
      password,
      email,
    });

    res
      .status(200)
      .json(new ApiResponse(200, "User created successfully", user));
  } catch (error) {
    throw new ApiError(500, `Error while registration: ${error}`);
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username && !email)
      throw new ApiError(404, "Required fields are missing");

    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (!user) throw new ApiError(404, "Username or password incorrect");

    const checkPassword = await user.isPasswordCorrect(password);

    if (!checkPassword)
      throw new ApiError(404, "Username or password incorrect");

    await setValue(user.username, user);

    res.status(200).json(new ApiResponse(200, "Login success"));
  } catch (error) {
    throw new ApiError(500, `Error while login: ${error}`);
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  try {
    let response = await delValue(req.params.username);
    if (response == "deleted") {
      res.status(200).json(new ApiResponse(200, "logged out success"));
    }
  } catch (error) {
    throw new ApiError(500, `Error while logout: ${error}`);
  }
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
