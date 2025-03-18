const { getValue } = require("../db/connectRedis");
const { ApiResponse } = require("../utils/ApiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

const checkCache = asyncHandler(async (req, res, next) => {
  const { username, password, email } = req.body;
  const user = await getValue(username);

  if (user) {
    return res.status(200).json(new ApiResponse(200, "From the cache", user));
  }

  next();
});

module.exports = {
  checkCache,
};
