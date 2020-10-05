const cli = require('@dxy_seer/easydiscord');
const config = require('./config.json');
var prefix = config.bot.Prefix;
const pack = require('@dxy_seer/easydiscord/package.json');
var dev = config.bot.Owner.UserDiscrim_Name;
// commands
cli.status('WATCHING', `${prefix}help | The development of Easy Discord!`);
cli.send(`reply`, `${prefix}ping`, `pong!`);
cli.send(`channel`, `${prefix}about`, `A discord bot created with an easy to use library to create a simple chat bot!`);
cli.send(`channel`, `${prefix}code`, "`npm i @dxy_seer/easydiscord`\n\nhttps://github.com/easy-discord/bot-template/blob/main/index.js");
cli.send(`channel`, `${prefix}dev`, `My developer is: ${dev}`);
cli.send(`channel`, `${prefix}version`, `Current package version i am running on:\n${cli.version()}`);
cli.embed(`#22e238`, `${prefix}help`, `**Help Center**`, `${prefix}ping\n${prefix}about\n${prefix}dev\n${prefix}version\n${prefix}code || Will give you starter code!\n${prefix}invite\n${prefix}support`);
cli.embed(`#22e238`, `${prefix}invite`, `Invite me!`, `[to your server!](http://easydiscord.glitch.me/get)`);
cli.embed(`#22e238`, `${prefix}support`, `Support needed?`, `Well i know the place for [all your questions!](http://easydiscord.glitch.me/server)`);
cli.embed(`#800080`, `${prefix}creeper`, `;) You've found an easter egg!`, `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvL5OrXR5CDBmf0E3hDnQ2XPAm68RKMHkgLA&usqp=CAU`)
// Commands for kill
cli.kill(`${prefix}kill`, config.bot.Owner.id);

cli.login(config.bot.token);
// Put the discord bot token in the config file!
