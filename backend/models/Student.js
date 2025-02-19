const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    role: String,
    name: String,
    collage: String,
    email: String,
    password: String,
});

module.exports = mongoose.model("Students", StudentSchema);
