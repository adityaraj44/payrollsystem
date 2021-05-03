const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const app = express();
//
// DB config
const db = require("./config/config").MONGOURI;
// connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// ejs middleware
app.use(expressLayouts);
app.set("view engine", "ejs");

// Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/", require("./routes/home"));
app.use("/personaldata", require("./routes/index"));
app.use("/register", require("./routes/index"));
app.use("/wages", require("./routes/wages"));
app.use("/report", require("./routes/report"));
app.use("/leave", require("./routes/leave"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started at ${PORT}`));
