const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");

const registerUser = asyncHandler((req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) throw new ApiError(404, "Required fields missing");

  
})