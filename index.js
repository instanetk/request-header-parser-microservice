const express = require("express");
const app = express();

app.get("/api/whoami", (req, res) => {
  console.log(req.headers);

  const header = {
    ipaddress: req.headers.host,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  };

  res.send(header);
});

const port = process.env.PORT || 3000;

const server = app.listen(port, console.log(`Listening on port ${port}`));

module.exports = server;
