const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API Tasks testing!");
});

module.exports = router;
