//---------------------------🌿 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ 💀---------------------------//
//Import Packages

const moment = require('moment');
const tz = require('moment-timezone');
const chalk = require('chalk');
const Discord = require('discord.js');


const client = new Discord.Client();

//---------------------------🌿 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ 💀---------------------------//
//Congig.js Setting 

const { timezone, format, clockchannel, updateinterval, token} = require('./Files/Config.js');

//---------------------------🌿 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ 💀---------------------------//
//Events 


client.once('ready', () => {

  const timeNow = moment().tz(timezone).format(format);

  const clockChannel = client.channels.cache.get(clockchannel);

  clockChannel.edit({ name: `╠  「🕒」ᴛɪᴍᴇ: ${timeNow}` }, 'Clock update')
    .catch(console.error);

  setInterval(() => {
    const timeNowUpdate = moment().tz(timezone).format(format);
    clockChannel.edit({ name: `╠  「🕒」ᴛɪᴍᴇ: ${timeNowUpdate}` }, 'Clock update')
      .catch(console.error);
  }, updateinterval);

	console.log(chalk.greenBright("[READY]"), `Logged in as ${client.user.tag} (${client.user.id}) at ${moment().format("DD MMMM YYYY, HH:mm:ss")}\n DeVeLoPeD By RedshoT`);
});

//---------------------------🌿 ᶻᵉʳᵒ༄ᴩᴏᴡᴇʀ 💀---------------------------//
//Bot Login
client.login(token);
