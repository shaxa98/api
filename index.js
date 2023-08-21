const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const network = require("./routes/network");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Servarba yofta natonist"));

app.use("/network", network);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
