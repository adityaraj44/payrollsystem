const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");

// index page
router.get("/", (req, res) => res.render("index"));

// data handle
router.post("/registeruser", async (req, res) => {
  try {
    const {
      fname,
      lname,
      email,
      gender,
      phone,
      age,
      city,
      state,
      pan,
      adhar,
      esic,
      pf,
    } = req.body;
    const employees = await Employee.create(req.body);
    console.log(employees.fname);
    res.render("sample", {
      fname: employees.fname + " " + employees.lname,
      email: employees.email,
      gender: employees.gender,
      phone: employees.phone,
      age: employees.age,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
