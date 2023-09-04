const mongoose = require("mongoose");

const networkSchema = new mongoose.Schema({
  name: String,
  image: {
    medium: String,
    original: String,
  },
});

const Network = mongoose.model("Network", networkSchema);

module.exports = Network;
