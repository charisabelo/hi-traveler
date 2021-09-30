const express = require("express");
const router = express.Router();
const fs = require("fs");

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

// const updateBusiness = (businessId, requestData) => {
//   let businesses = getBusinesses();
//   let business = businesses.find((business) => {
//     console.log(business);
//     return requestData.r;
//   });
// };

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
