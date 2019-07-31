const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/card-of-the-day", (req, res) => {
  const randomCard = {
    url: "https://rws-cards-api.herokuapp.com/api/v1/cards/random"
  };

  request(randomCard, (error, response, body) => {
    let cards = JSON.parse(body).cards;
    //console.log(cards[0].name);
    res.render("card-of-the-day", { cards });
  });
});

module.exports = router;
