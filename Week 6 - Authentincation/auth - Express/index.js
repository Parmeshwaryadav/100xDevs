const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "parmeshwar123";

const app = express();
app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // we should check if the username is already exist or not

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "you are signed Up",
  });
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = generateToken();
    user.token = token;
    res.send({
      token,
    });
    console.log(users);
  } else {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  }
});

app.get("/me", () => {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if(){
    
  }
});

app.listen(3000, console.log("App is running on localhost:3000"));
