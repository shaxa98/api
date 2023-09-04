const express = require("express");
const router = express.Router();
const Network = require("../modules/network-modules");

router.get("/", async (req, res) => {
  const networks = await Network.find();
  res.json(networks);
});

router.post("/", async (req, res) => {
  const newNetwork = new Network(req.body);
  await newNetwork.save();
  res.json(newNetwork);
});

module.exports = router;
