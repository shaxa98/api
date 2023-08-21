const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const networks = await Network.find({}, "_id name imageUrl");
  res.json(networks);
});

router.post("/", async (req, res) => {
  const { name, imageUrl } = req.body;
  const newNetwork = new Network({ name, imageUrl });
  await newNetwork.save();
  res.json(newNetwork);
});

module.exports = router;
