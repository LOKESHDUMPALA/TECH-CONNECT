const express = require("express");
const { applyToCompany, getCompanyDetails } = require("../controllers/company-controller");

const router = express.Router();

router.patch("/applied", applyToCompany);
router.get("/company/:email", getCompanyDetails);

module.exports = router;
