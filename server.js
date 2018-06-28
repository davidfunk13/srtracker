const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/overwatch_sr_tracker").then(() => {
  console.log('connected');
})


app.use(logger("dev"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
require("./routes.js")(app);

app.listen(PORT, err => {
  if (err) {
    throw err;
  }
  console.log(`OW SR Tracker backend listening on ${PORT}`);
});
