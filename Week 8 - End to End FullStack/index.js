require("dotenv").config();

const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

app.listen(3000, console.log("listening on port 3000"));

// async function main() {
//   await mongoose.connect(
//     "mongodb+srv://admin:$Heisenberg%4012$@cluster0.0hxfm.mongodb.net/coursera-app"
//   );
// }

// main();
