const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/images");
  },

  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
// const path = "../public/images";

const businessesPath = "./data/businesses.json";

// get all businesses
const getBusinesses = () => {
  const fileContent = fs.readFileSync(businessesPath);
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

router.get("/:id", (req, res) => {
  try {
    const businesses = getBusinesses();
    const business = businesses.find(
      (business) => business.id === req.params.id
    );

    if (business) {
      res.status(200).json(business);
    }
  } catch (error) {
    return res.status(500).json({ error: "Path not found" });
  }
});

router.post("/", (req, res) => {
  const allBusinesses = getBusinesses();

  const newBusiness = {
    id: uuidv4(),
    name: req.body.name,
    type: req.body.type,
    recommended: false,
    recommends: 0,
    smallbusiness: true,
    street: req.body.street,
    city: req.body.street,
    number: req.body.number,
    website: req.body.website,
    image: `${req.body.image}http://localhost:8080/`,
    stars: "",
    description: req.body.description,
  };

  allBusinesses.push(newBusiness);

  fs.writeFileSync(businessesPath, JSON.stringify(allBusinesses, null, 2));
  res.status(200).json(newBusiness);
});

router.put("/:id", (req, res) => {
  const businesses = getBusinesses();
  const found = businesses.find((business) => business.id === req.params.id);

  if (found) {
    const update = req.body;

    businesses.forEach((business) => {
      if (business.id === req.params.id) {
        // console.log(update.recommends);

        business.recommends = update.recommends
          ? update.recommends
          : business.recommends;
        // console.log(businesses);
        // res.json({ msg: "business updated", business });
      }
    });
    fs.writeFileSync(businessesPath, JSON.stringify(businesses, null, 2));
    res.status(200).json(businesses);
  }
});

module.exports = router;
