const mongoose = require("mongoose");

const networkSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
});

const Network = mongoose.model("Network", networkSchema);

module.exports = Network;
