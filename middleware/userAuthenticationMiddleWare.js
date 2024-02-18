const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const throwError = require("../throwError");

const verifyUserIsAuthorizedByToken = asyncHandler(async (req, res, next) => {
  let tokenFromHeader;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header by spliting into array and getting second element
      tokenFromHeader = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(tokenFromHeader, process.env.JWT_SECRET);
      // Get user id from decoded jwt token excluding the password
      req.user = await User.findById(decodedToken.id).select("-password");
      // Call the next middleware
      next();
    } catch (error) {
      console.log(error);
      throwError(res, 401, "Not Authorized");
    }
  }

  // If there is no token throw error
  if (!tokenFromHeader) {
    throwError(res, 401, "Not Authorized");
  }
});

// const jsonWebTokenNotFound = (token) => {
//   if (!token) {
//     throwError(res, 401, "Not Authorized");
//   }
// };

module.exports = { verifyUserIsAuthorizedByToken }
