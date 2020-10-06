const express = require("express");
module.exports = (app) => {
  const router = express.Router();

  router.get("/", function (req, res) {
    res.send("OK!");
  });

  app.use("/auth", router);
};
