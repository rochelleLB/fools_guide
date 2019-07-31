const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/swords", (req, res) => {
  const allTarotCards = {
    url: "https://rws-cards-api.herokuapp.com/api/v1/cards"
  };

  request(allTarotCards, (error, response, body) => {
    let cards = JSON.parse(body).cards;
    let swords = cards.filter(card => {
      return card.suit === "swords";
    });
    console.log(swords);
    res.render("swords", { swords });
  });
});

module.exports = router;
