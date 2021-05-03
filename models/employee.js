const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  phone: {
    type: Number,
  },
  age: {
    type: Number,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },

  pan: {
    type: Number,
  },
  adhar: {
    type: Number,
  },
  esic: {
    type: Number,
  },
  pf: {
    type: Number,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
