const express = require("express");
const passwordController = require("./../Controller/passwordController");
const router = express.Router();

router.post("/change-password", passwordController.changePassword);

module.exports = router;
