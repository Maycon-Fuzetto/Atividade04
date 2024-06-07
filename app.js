const express = require("express");
const os = require("os");
const app = express();

app.get("/liveness", (req, res) => {
  return res.status(200).json({
    message: "meu app esta vivo!",
    patch: process.cwd(),
    gid: process.getegid ? process.getegid() : "N/A",
    uid: process.geteuid ? process.geteuid() : "N/A"
  });
});

app.get("/readiness", (req, res) => {
  return res.status(200).json({
    message: "meu app esta pronto!",
  });
});

module.exports = app;
