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

module.exports = router;
