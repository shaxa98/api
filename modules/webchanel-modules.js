const mongoose = require("mongoose");

const webChanelSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const webChanel = mongoose.model("webChanel", webChanelSchema);

module.exports = webChanel;
