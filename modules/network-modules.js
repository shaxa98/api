const mongoose = require("mongoose");

const networkSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const Network = mongoose.model("Network", networkSchema);

module.exports = Network;
