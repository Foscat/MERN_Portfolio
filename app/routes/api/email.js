const router = require("express").Router();
const emailController = require("../../controllers/nodemailer");

router.route("/reachout")
    .post(emailController.reachoutNotification);

module.exports = router;