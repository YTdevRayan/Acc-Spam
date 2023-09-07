Oh //===============RAYAN============//
const Discord = require("discord.js");
const RAYAN = new Discord.Client();
//===============EMPRATOR============//
RAYAN.on("ready", () => {
  console.log(`Online In Servers`);
  let statuses = [`ACC SPAM BY YT DEV RAYAN`];
  setInterval(function() {
    let PLAYING = statuses[Math.floor(Math.random() * statuses.length)];
    RAYAN.user.setActivity(PLAYING, {      
    type: "PLAYING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
//===============RAYAN============//
RAYAN.on('message', message => {
if (message.content === 'owo') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`owo daily`)
          .then(m => {
            count++;
          })
        }
      }
});
//===============RAYAN============//
RAYAN.login("");/////TOKEN DANE
//===============RAYAN============//
