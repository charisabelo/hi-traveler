const express = require("express");
const app = express();
const cors = require("cors");
const businessesRoute = require("./routes/businesses");
const plannerRoute = require("./routes/planner");

require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use((req, res, next) => {
  console.log("Incoming Request");
  next();
});

app.use("/businesses", businessesRoute);
app.use("/planner", plannerRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
