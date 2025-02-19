const express = require("express");
const { postEvent, getAllPosts } = require("../controllers/events-controller");

const router = express.Router();

router.post("/postevent", postEvent);
router.get("/allposts", getAllPosts);

module.exports = router;
