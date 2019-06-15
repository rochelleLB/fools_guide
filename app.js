const express = require("express");

const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/card-of-the-day", (req, res) => {
  res.send("Your card of the day");
});

app.get("/tarot-reading", (req, res) => {
  res.send("Choose a spread for your own personalised reading");
});

app.get("/browse-cards", (req, res) => {
  res.send("Tarot Card Database");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(3000, () => {
  console.log("The server is running!")
});
