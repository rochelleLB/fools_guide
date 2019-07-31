const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/browse-cards", (req, res) => {
  const tarotDB = {
    url: `https://rws-cards-api.herokuapp.com/api/v1/cards`
  };
  request(tarotDB, (error, response, body) => {
    // temp bodyParser
    let cards = JSON.parse(body);
    // to rename later
    let tarotCards = cards.cards;
    //console.log(tarotCards[0].name);
    res.render("browse-cards", { tarotCards: tarotCards });
  });
});

module.exports = router;
