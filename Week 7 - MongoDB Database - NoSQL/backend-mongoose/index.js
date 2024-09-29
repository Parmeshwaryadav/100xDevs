const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "parmeshwar";

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:$Heisenberg@12$@cluster0.7kmvq.mongodb.net/todo-app"
);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    message: "You are signed up",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (response) {
    const token = jwt.sign({
      id: response._id.toString(),
    });

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

app.post("/todo", (req, res) => {});

app.post("/todos", (req, res) => {});

app.listen(3000, console.log("App is running on http://localhost:3000/"));
