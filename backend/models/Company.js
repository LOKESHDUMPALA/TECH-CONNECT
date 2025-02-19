const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    role: String,
    name: String,
    email: String,
    password: String,
    appliedEmails: [String],
});

module.exports = mongoose.model("Companies", CompanySchema);
