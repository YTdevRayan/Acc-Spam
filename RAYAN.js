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
