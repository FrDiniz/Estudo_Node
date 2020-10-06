const express = require("express");
module.exports = (app) => {
  const router = express.Router();

  router.get("/", function (req, res) {
    res.send("should list contracts!");
  });

  router.get("/:id", function (req, res) {
    res.send(`should get a contract number ${req.params.id}!`);
  });

  app.use("/contract", router);
};
