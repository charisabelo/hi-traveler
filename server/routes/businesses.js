const express = require("express");
const router = express.Router();
const fs = require("fs");

const businessesPath = "./data/businesses.json";
const plannerPath = "./data/planner.json";

// get all businesses
const getBusinesses = () => {
  const fileContent = fs.readFileSync(businessesPath);
  const parsedFileContent = JSON.parse(fileContent);
  return parsedFileContent;
};

// get all planner items
const getPlanner = () => {
  const fileContent = fs.readFileSync(plannerPath);
  const parsedFileContent = JSON.parse(fileContent);
  return parsedFileContent;
};

router.get("/", (req, res) => {
  try {
    const businesses = getBusinesses();
    return res.status(200).json(businesses);
  } catch (error) {
    return res.status(500).json({ error: "Path not found" });
  }
});

module.exports = router;
