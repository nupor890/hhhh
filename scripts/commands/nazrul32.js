const fs = require("fs");
module.exports.config = {
	name: "😡",
    version: "1.0.1",
	permission: 0,
	credits: "Nazrul",
	prefix: true, 
	description: "hihihihi",
	category: "no prefix",
	usages: "🤬",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😈")==0 || event.body.indexOf("😈")==0 ||
   event.body.indexOf("😈")==0 ||
    event.body.indexOf("😈")==0) {
		var msg = {
				body: "ও্ঁর্ঁ মা্ঁথা্ঁয়্ঁ কে্ঁউ্ঁ ঠা্ঁন্ডা্ঁ পা্ঁনি্ঁ ডা্ঁলো্ঁ 🧊🍶😃🐒 ..!!😂 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/Rag3.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }