const mongoose = require("mongoose");

const wagesSchema = new mongoose.Schema({
  basicpay: {
    type: Number,
  },
  da: {
    type: Number,
  },
  hra: {
    type: Number,
  },
  medical: {
    type: Number,
  },
  conv: {
    type: Number,
  },
  pf: {
    type: Number,
  },
  tds: {
    type: Number,
  },
});

const Wages = mongoose.model("Wages", wagesSchema);

module.exports = Wages;
