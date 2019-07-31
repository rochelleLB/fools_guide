const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/wands", (req, res) => {
  const allTarotCards = {
    url: "https://rws-cards-api.herokuapp.com/api/v1/cards"
  };

  request(allTarotCards, (error, response, body) => {
    let cards = JSON.parse(body).cards;
    let wands = cards.filter(card => {
      return card.suit === "wands";
    });
    console.log(wands);
    res.render("wands", { wands });
  });
});

module.exports = router;
