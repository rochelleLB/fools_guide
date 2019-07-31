const express = require("express");
const router = express.Router();

router.get("/tarot-reading", (req, res) => {
  res.render("tarot-reading");
});

module.exports = router;
