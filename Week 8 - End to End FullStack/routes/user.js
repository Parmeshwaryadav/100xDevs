const { Router } = require("express");
const { userModel } = require("../db");
// const JWT_USER_PASSWORD = "abcakcbscs";

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  // const { email, password, firstName, lastName } = req.body;
  // // creating a signUp user
  // userModel.create({
  //   email: email,
  //   password: password,
  //   firstName: firstName,
  //   lastName: lastName,
  // });
  // res.json({
  //   message: "signup succeeded",
  // });
});

userRouter.post("/signin", (req, res) => {
  // const { email, password } = req.body;
  // const user = res.json({
  //   message: "signin endpoint",
  // });
});

userRouter.get("/purchase", (req, res) => {
  res.json({
    message: "purchases endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
