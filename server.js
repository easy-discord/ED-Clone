const express = require("express");
const config = require('@dxy_seer/easydiscord/package.json');
const app = express();
const discordBot = require("./bot");
app.use(require('./guides'));
app.use(express.static("public"));
setInterval(() => require('node-fetch')(config.site.url).then(() => console.log('Pinged website....')), 4 * 60 * 1000);
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
