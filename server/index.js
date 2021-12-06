const express = require("express");

const app = express();

const port = process.env.PORT || 3001;
const name = process.env.NAME || "¯\\_(ツ)_/¯";

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use("/", (req, res) => {
  console.log('Got a visit from someone on route "/"');
  const htmlString = `
  <h1>Hello <span style="color: red">${name}</span>!!!</h1>
  <p>Welcome to the IEEE UP SB Docker Workshop</p>
  `;
  return res.send(htmlString);
});
