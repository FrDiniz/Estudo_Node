const express = require("express");
const config = require("./src/config/index");
const bodyParser = require("body-parser");
const routes = require("./src/routes");

require("./src/config/bd")();

var app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("App get!");
});

routes(app);

app.listen(config.port, function () {
  console.log("ouvindo a porta " + config.port);
});

module.exports = app;
