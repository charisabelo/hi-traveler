const express = require("express");
const app = express();
const cors = require("cors");
const businessesRoute = require("./routes/businesses");
const fileUpload = require("express-fileupload");

require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use((req, res, next) => {
  console.log("Incoming Request");
  next();
});

app.use("/businesses", businessesRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
