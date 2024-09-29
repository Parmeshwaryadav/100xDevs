const { Router } = require("express");
const { adminModel } = require("../db");
// const { JWT_ADMIN_PASSWORD } = require("../config");

const adminRouter = Router();
// bcrypt, zod,

adminRouter.post("/user/signup", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/user/signin", (req, res) => {
  res.json({
    message: "signin endpoint",
  });
});

adminRouter.post("/", (req, res) => {
  res.json({
    message: "purchases endpoint",
  });
});

adminRouter.put("/", (req, res) => {
  res.json({
    message: "purchases endpoint",
  });
});

adminRouter.post("/bulk", (req, res) => {
  res.json({
    message: "purchases endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
