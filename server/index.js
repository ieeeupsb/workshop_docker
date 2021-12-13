const express = require("express");

const app = express();

// for regular dockerfile env variables
const port = process.env.PORT || 3001;
const name = process.env.NAME || "¯\\_(ツ)_/¯";
// for docker compose
const database = {
  name: process.env.DB_NAME || "No database name",
  user: process.env.DB_USER || "No user",
  password: process.env.DB_PASSWORD || "No password",
};

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  console.log('Got a visit from someone on route "/"');
  const htmlString = `
  <h1>Hello <span style="color: red">${name}</span>!!!</h1>
  <p>Welcome to the IEEE UP SB Docker Workshop</p>
  `;
  return res.send(htmlString);
});

app.get("/database", (req, res) => {
  console.log('Got a visit from someone on route "/database"');
  const htmlString = `
  <h1>Hello <span style="color: red">${name}</span>!!!</h1>
  <p>Welcome to the IEEE UP SB Docker Workshop (Now with docker-compose)</p>
  <ul>
    <li>Database name ${database.name}</li>
    <li>Database user ${database.user}</li>
    <li>Database password ${database.password}</li>
  </ul>
  `;
  return res.send(htmlString);
});
