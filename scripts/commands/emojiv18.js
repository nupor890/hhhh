const fs = require("fs");
module.exports.config = {
	name: "emojiv18",
    version: "1.0.1",
	ermission: 0,
	credits: "nazrul", 
	prefix:true,
	description: "nazrul",
	category: "nazrul",
	usages: "🐰",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🦔")==0 || event.body.indexOf("🐀")==0 || event.body.indexOf("🐱")==0 || event.body.indexOf("🐰")==0) {
		var msg = {
				body: "এ্ঁ খ্ঁর্ঁগো্ঁশ্ঁ গা্ঁজ্ঁর্ঁ খা্ঁবি্ঁ 🥕\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/khorgosh.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }