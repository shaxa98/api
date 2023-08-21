const express = require("express");
const mongoose = require("mongoose");
const app = express();
const network = require("./routes/network");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/network", network);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
