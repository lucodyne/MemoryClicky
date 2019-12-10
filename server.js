const express = require("express");
const router = require("express").Router();
const path = require("path");
const PORT = process.env.PORT || 6072;
const app = express();

app.use(express.json());
app.use(express.static("client/build"));
app.use(express.urlencoded({ extended: true }));

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, function() {
  console.log("App now listening: " + PORT);
});
