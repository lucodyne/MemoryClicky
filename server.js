const express = require("express");
const PORT = process.env.PORT || 6072;
const app = express();

app.use(express.json());
app.use(express.static("client/build"));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, function() {
  console.log("App now listening: " + PORT);
});
