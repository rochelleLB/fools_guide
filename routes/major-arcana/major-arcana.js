const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/marjor-arcana", (req, res) => {
  const allTarotCards = {
    url: "https://rws-cards-api.herokuapp.com/api/v1/cards"
  };

  request(allTarotCards, (error, response, body) => {
    let cards = JSON.parse(body).cards;
    let majorArcana = cards.filter(card => {
      return card.type === "major";
    });
    console.log(majorArcana);
    res.render("major-arcana", { majorArcana });
  });
});

module.exports = router;
