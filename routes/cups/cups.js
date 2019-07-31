const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/cups", (req, res) => {
  const allTarotCards = {
    url: "https://rws-cards-api.herokuapp.com/api/v1/cards"
  };

  request(allTarotCards, (error, response, body) => {
    let cards = JSON.parse(body).cards;
    let cups = cards.filter(card => {
      return card.suit === "cups";
    });
    res.render("cups", { cups });
  });
});

module.exports = router;
