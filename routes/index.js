const contact = require("../models/contact");

const express = require("express"),
  router = express.Router(contact);

router.get("/", (req, res) => {
  console.log("We are here!");
  res.render("index");
});

router.post("/contact", function (req, res) {
  var newContact = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };

  contact.create(newContact, function (err, newMessage) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("back");
      console.log(newMessage);
    }
  });
});

module.exports = router;
