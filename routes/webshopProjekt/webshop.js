const express = require("express"),
  router = express.Router();

router.get("/webshop", (req, res) => {
  res.render("webshop");
});

module.exports = router;
