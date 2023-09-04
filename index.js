const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const network = require("./routes/network");
const webChanel = require("./routes/web-channels");
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(`${process.env.MONGO_URL}/${process.env.MONGO_DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log("MONGO_DB Connected!");
  })
  .catch((err) => {
    console.log("connection to db failed");
    console.log(err.name, err.message);
  });

app.use("/network", network);
app.use("/web-chanel", webChanel);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
