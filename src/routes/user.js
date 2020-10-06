const express = require("express");
module.exports = (app) => {
  const router = express.Router();

  router.get("/", function (req, res) {
    res.send("should list users!");
  });

  router.get("/:id", function (req, res) {
    res.send(`should get a user id ${req.params.id}!`);
  });

  app.use("/user", router);
};
