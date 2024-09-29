const { Router } = require("express");
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body; //! Todo: adding "ZOD" Validation
  //! Todo: hash the password using "bcrypt" so plain text password is not stored in the Database.

  try {
    await adminModel.create({
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

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Todo: ideally password should be hashed and stored in DB in signUp endpoint, and hence you can't compare user provided password with DB password with below Logic.
    const admin = await adminModel.findOne({
      email: email,
      password: password,
    });

    if (admin) {
      const token = jwt.sign(
        {
          id: admin._id,
        },
        JWT_ADMIN_PASSWORD
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

adminRouter.post("/course", async (req, res) => {
  const adminId = req.userId;
  const { title, description, price, imageUrl } = req.body;

  await courseModel.create({
    title: title,
    description: description,
    price: price,
    imageUrl: imageUrl,
    creatorId: adminId,
  });

  res.json({
    message: "course created",
    courseId: course._id,
  });
});

adminRouter.put("/course", (req, res) => {
  res.json({
    message: "purchases endpoint",
  });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "purchases endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
