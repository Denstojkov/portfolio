const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  flash = require("connect-flash"),
  ejs = require("ejs"),
  methodOverride = require("method-override"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  passportLocal = require("passport-local"),
  dotEnv = require("dotenv").config(),
  passportLocalMongoose = require("passport-local-mongoose"),
  router = express.Router();

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("trust proxy", 1);
app.use(
  require("express-session")({
    secret: "Secretkey",
    resave: false,
    saveUninitialized: false,
  })
);

app.listen(3000, function () {
  console.log("Server on 3000");
});
