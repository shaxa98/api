const express = require("express");
const router = express.Router();
const Network = require("../modules/network-modules");

router.get("/", async (req, res) => {
  const networks = await Network.find({}, "_id name imageUrl");
  res.json(networks);
});

router.post("/", async (req, res) => {
  const { name, image } = req.body;
  const newNetwork = new Network({ name, image });
  await newNetwork.save();
  res.json(newNetwork);
});

module.exports = router;
