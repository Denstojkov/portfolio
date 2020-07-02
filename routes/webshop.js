const express = require("express"),
  router = express.Router();

router.get("/webshop", (req, res) => {
  res.send("Test1");
});

module.exports = router;
