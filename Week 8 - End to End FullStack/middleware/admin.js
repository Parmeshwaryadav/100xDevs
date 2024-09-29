const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

const adminMiddleware = (req, res, next) => {
  const token = req.headers.token;
  const decoded = jwt.verify(token, JWT_USER_PASSWORD);

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    req.status(403).json({
      message: "you are unverified by userMiddleware",
    });
  }
};

module.exports = { adminMiddleware: adminMiddleware };
