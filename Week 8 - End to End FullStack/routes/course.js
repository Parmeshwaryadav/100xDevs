const { Router } = require("express");
const { courseModel } = require("../db");

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "courses endpoint",
  });
});

courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "courses endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
