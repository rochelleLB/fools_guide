const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");

//Main Routes
const homeRoute = require("./routes/home");
const dailyCardRoute = require("./routes/card-of-the-day");
const browseCardsRoute = require("./routes/browse-cards");
const getAReadingRoute = require("./routes/tarot-reading");
const aboutRoute = require("./routes/about");

//Sperate Card Suite Pages
const majorArcanaRoute = require("./routes/major-arcana/major-arcana");
const cupsRoute = require("./routes/cups/cups");
const pentaclesRoute = require("./routes/pentacles/pentacles");
const swordsRoute = require("./routes/swords/swords");
const wandsRoute = require("./routes/wands/wands");

//Connecting main routes to App.js
app.use(homeRoute);
app.use(dailyCardRoute);
app.use(browseCardsRoute);
app.use(getAReadingRoute);
app.use(aboutRoute);

//Connecting card suit routes to app.js
app.use(majorArcanaRoute);
app.use(cupsRoute);
app.use(pentaclesRoute);
app.use(swordsRoute);
app.use(wandsRoute);

app.listen(3000, () => {
  console.log("The server is running!");
});
