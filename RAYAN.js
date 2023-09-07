//===============RAYAN============//
const Discord = require("discord.js");
const RAYAN = new Discord.Client();
//===============EMPRATOR============//
RAYAN.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`STREAMING BY DEV RAYAN | KP UP`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    RAYAN.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//===============RAYAN============//
RAYAN.on("ready", () => {
    var join = RAYAN.channels.get(""); /// id voice
    if (join) join.join();
  });
//===============RAYAN============// 
RAYAN.login("");/////TOKEN DANE
//===============RAYAN============//
