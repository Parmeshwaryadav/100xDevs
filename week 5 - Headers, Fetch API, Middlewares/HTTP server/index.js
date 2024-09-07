const express = require("express");

const app = express();

function middleWareMethod(req, res, next) {
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(new Date());
}

app.get("/sum", (req, res) => {
  middleWareMethod(req, res);
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
  });
});

app.listen(3000, () => {
  console.log(`App is listening on port 3000`);
});
