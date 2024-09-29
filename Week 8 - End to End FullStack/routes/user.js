const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body; //! Todo: adding "ZOD" Validation
  //! Todo: hash the password using "bcrypt" so plain text password is not stored in the Database.

  try {
    await userModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });

    res.status(201).json({
      message: "signup successful, Your Account has been created.",
    });
  } catch (error) {
    console.error("Error during user SignUp:", error);
    res.status(500).json({
      message: "An error occurred during signup",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Todo: ideally password should be hashed and stored in DB in signUp endpoint, and hence you can't compare user provided password with DB password with below Logic.
    const user = await userModel.findOne({
      email: email,
      password: password,
    });

    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_USER_PASSWORD
      );

      // Do cookie logic, if we are signing user via "Cookie" based logic
      res.json({
        message: "Please find your token below",
        token: token,
      });
    } else {
      res.status(403).json({
        message: "Incorrect Credentials.",
      });
    }
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ message: "An error occurred during signin" });
  }
});

userRouter.get("/purchase", (req, res) => {
  res.json({
    message: "purchases endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
