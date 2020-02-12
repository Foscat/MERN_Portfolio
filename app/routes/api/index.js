const router = require("express").Router();
const postRoutes = require("./posts");
const emailRoutes = require("./email");


// Index serves as directory for routes

// Posts routes
router.use("/posts", postRoutes);

// Email routes
router.use("/email", emailRoutes);

module.exports = router;