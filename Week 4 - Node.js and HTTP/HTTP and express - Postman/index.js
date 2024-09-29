const express = require("express");

const app = express();

app.use(express.json());

const users = [
  {
    name: "John Wick",
    kidney: [
      {
        healthy: false,
      },
    ],
  },
];

// in "get" request we usually use query parameter like: http://localhost:3000?a=5/=9
app.get("/", (req, res) => {
  const kidneys = users[0].kidney;
  const noOfKidneys = kidneys.length;
  const healthyKidneys = kidneys.filter((kidney) => kidney.healthy);
  const numberOfhealthyKidneys = healthyKidneys.length;

  const numberOfUnhealthyKidneys = noOfKidneys - numberOfhealthyKidneys;

  console.log("Kidneys:", kidneys);
  console.log("Total number of kidneys:", noOfKidneys);
  console.log("Number of healthy kidneys:", numberOfhealthyKidneys);
  console.log("Number of unhealthy kidneys:", numberOfUnhealthyKidneys);

  res.json({
    kidneys,
    noOfKidneys,
    numberOfhealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthyKidney = req.body.isHealthyKidney;
  users[0].kidney.push({
    healthy: isHealthyKidney,
  });
  res.json({
    message: "Your request is Posted",
  });
});

// not working
app.put("/", (req, res) => {
  const user = users[0];
  const initialUnhealthyCount = user.kidney.filter(
    (kidney) => !kidney.healthy
  ).length;

  user.kidney.forEach((kidney) => {
    kidney.healthy = true;
  });

  res.json({
    message: "All kidneys updated to healthy status",
    updatedKidneys: initialUnhealthyCount,
    totalHealthyKidneys: user.kidney.length,
  });
});

app.delete("/", (req, res) => {
  const user = users[0];
  const initialKidneyCount = user.kidney.length;

  user.kidney = user.kidney.filter((kidney) => kidney.healthy);

  const removedKidneys = initialKidneyCount - user.kidney.length;

  if (removedKidneys > 0) {
    res.json({
      message: `${removedKidneys} unhealthy kidney(s) removed successfully`,
      remainingKidneys: user.kidney.length,
    });
  } else {
    res.json({ message: "No unhealthy kidneys found to remove" });
  }
});

app.listen(3000, console.log("app is running  http://localhost:3000/"));
