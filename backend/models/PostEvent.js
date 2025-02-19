const mongoose = require("mongoose");

const PostEventSchema = new mongoose.Schema({
    email: String,
    dates: String,
    category: String,
    description: String,
});

module.exports = mongoose.model("PostEvents", PostEventSchema);
