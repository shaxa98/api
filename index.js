const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const network = require("./routes/network");
const webChanel = require("./routes/web-channels");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGO_DATABASE}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Servarba yofta natonist"));

app.use("/network", network);
app.use("/web-chanel", webChanel);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
