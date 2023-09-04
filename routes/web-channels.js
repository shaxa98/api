const express = require("express");
const router = express.Router();
const Webchanel = require("../modules/webchanel-modules");

router.get("/", async (req, res) => {
  const Webchanels = await Webchanel.find({});
  res.json(Webchanels);
});

router.post("/", async (req, res) => {
  const newWebchanel = new Webchanel(req.body);
  await newWebchanel.save();
  res.json(newWebchanel);
});

module.exports = router;
