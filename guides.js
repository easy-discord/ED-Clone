const express = require("express");
const router = express.Router();
const discordBot = require("./bot");
const Config = require('./config.json');




router.get("/domainname", function(request, response) {
  let domain = process.env.PROJECT_DOMAIN;
  response.status(200).json({
    message: domain
  });
});

router.get("/botinfo", async function(request, response) {
  let authURL;
  let domain = process.env.PROJECT_DOMAIN;
  let uptime = process.uptime();

  try {
    authURL =
      "https://discordapp.com/api/oauth2/authorize?client_id=" +
      Config.bot.id +
      "&permissions=8&scope=bot";
  } catch (e) {
    console.error(e);
  }

  response.status(200).json({
    url: authURL,
    domain: domain,
    uptime: uptime
  });
});


router.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});


module.exports = router;
