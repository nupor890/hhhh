const fs = require("fs");
module.exports.config = {
	name: "emov6",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul",
	prefix:true,
	description: "hihihihi",
	category: "nazrul",
	usages: "emov6",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😲")==0 || event.body.indexOf("🧐")==0 || event.body.indexOf("😳")==0 || event.body.indexOf("😮")==0) {
		var msg = {
				body: "ও্ঁভা্ঁবে্ঁ কে্ঁনো্ঁ তা্ঁকা্ঁও্ঁ আ্ঁমি্ঁ ভু্ঁত্ঁ না্ঁকি্ঁ 👻\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/amikivut.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🐒", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }