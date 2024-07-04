const fs = require("fs");
module.exports.config = {
	name: "emojiv71",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix:true,
	description: "nazrul",
	category: "nazrul",
	usages: "🐵",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🐵")==0 || event.body.indexOf("🙉")==0 || event.body.indexOf("🐵")==0 || event.body.indexOf("🐒")==0 || event.body.indexOf("🙊")==0 || event.body.indexOf("🙈")==0) {
		var msg = {
				body: "ই্ঁমো্ঁজি্ঁটা্ঁ ঠি্ঁক্ঁ তো্ঁর ম্ঁতো্ঁ 🐒\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/imojithik.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }