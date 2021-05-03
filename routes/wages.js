const express = require("express");
const router = express.Router();
const Wages = require("../models/wages");

router.get("/", (req, res) => res.render("wages"));

// handle wages
router.post("/employeewages", async (req, res) => {
  try {
    const { id, basicpay, da, hra, medical, conv, pf, tds } = req.body;
    const wages = await Wages.create(req.body);

    res.render("report", {
      id: Math.floor(Math.random() * 100000),
      basicpay: wages.basicpay,
      da: wages.da,
      hra: wages.hra,
      medical: wages.medical,
      conv: wages.conv,
      pf: wages.pf,
      tds: wages.tds,
      total:
        wages.basicpay +
        wages.da +
        wages.hra +
        wages.medical +
        wages.conv +
        wages.pf +
        wages.tds,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
