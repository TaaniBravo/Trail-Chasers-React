// Define our dependencies
const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const passport = require("./config/passport");
const PORT = process.env.PORT || 8080;
const mongoDb = require("./config/options")("mongodb");

console.log(mongoDb);

// Create our server
const app = express();

// Define middleware here
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Serce up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//
app.use(passport.initialize());
app.use(compression());

app.use(require("./routes"));

// Connect to the Mongo DB
mongoose.connect(mongoDb, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// Listen for our app
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
