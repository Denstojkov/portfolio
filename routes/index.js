const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  console.log("We are here!");
  res.render("index");
});

module.exports = router;
