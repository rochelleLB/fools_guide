const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");

//EKelen tarot API

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/card-of-the-day", (req, res) => {
  res.render("card-of-the-day");
});

app.get("/tarot-reading", (req, res) => {
  res.render("tarot-reading");
});

app.get("/browse-cards", (req, res) => {
  const tarotDB = {
    url: `https://rws-cards-api.herokuapp.com/api/v1/cards`
  };
  request(tarotDB, (error, response, body) => {
    // temp bodyParser
    let cards = JSON.parse(body);
    // to rename later
    let tarotCards = cards.cards;
    console.log(tarotCards[0].name);
    res.render("browse-cards", { tarotCards: tarotCards });
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("The server is running!");
});
