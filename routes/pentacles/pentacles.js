const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/pentacles", (req, res) => {
  const allTarotCards = {
    url: "https://rws-cards-api.herokuapp.com/api/v1/cards"
  };

  request(allTarotCards, (error, response, body) => {
    let cards = JSON.parse(body).cards;
    let pentacles = cards.filter(card => {
      return card.suit === "pentacles";
    });
    res.render("pentacles", { pentacles });
  });
});

module.exports = router;
