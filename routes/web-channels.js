const express = require("express");
const router = express.Router();
const Webchanel = require("../modules/webchanel-modules");

router.get("/", async (req, res) => {
  const Webchanels = await Webchanel.find({}, "_id name imageUrl");
  res.json(Webchanels);
});

router.post("/", async (req, res) => {
  const { name, imageUrl } = req.body;
  const newWebchanel = new Webchanel({ name, imageUrl });
  await newWebchanel.save();
  res.json(newWebchanel);
});

module.exports = router;
