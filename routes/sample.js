const express = require("express");
const router = express.Router();

router.get("/empdata", (req, res) => res.render("sample"));

module.exports = router;
