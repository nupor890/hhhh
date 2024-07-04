const fs = require("fs");
module.exports.config = {
	name: "emojiv350",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix:true,
	description: "nazrul",
	category: "naxrul",
	usages: "kemonacho",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😶‍🌫️")==0 || event.body.indexOf("🤝")==0 || event.body.indexOf("😇")==0 || event.body.indexOf("🔥")==0) {
		var msg = {
				body: "কেমন আছো তুমি?🖤 মেয়ে হলে বুকে আসো ছেলে হলে ভাগো! 😚😁💚\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/emojiv35.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }