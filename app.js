const express = require("express");
const path = require('path');

const app = express();

// Das Gerät verbinden.

app.get("/link", (req, res) => {
  res.sendFile(path.join(__dirname, "link.html"));
});

app.listen(7070);


