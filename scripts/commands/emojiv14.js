const fs = require("fs");
module.exports.config = {
	name: "emojiv14",
    version: "1.0.1",
	permission: 0,
	credits: "nazru", 
	prefix:true,
	description: "nazrul",
	category: "nazrul",
	usages: "🤣",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😅")==0 || event.body.indexOf("😆")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("😅")==0) {
		var msg = {
				body: "এ্ঁত্ঁ হা্ঁসো্ঁ কে্ঁনো্ঁ 🐸🫢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/hashi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }