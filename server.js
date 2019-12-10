const express = require("express");
const PORT = process.env.PORT || 6072;
const app = express();
const routes = require("./routes");
app.use(express.json());
app.use(express.static("client/build"));
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(PORT, function() {
  console.log("App now listening: " + PORT);
});
