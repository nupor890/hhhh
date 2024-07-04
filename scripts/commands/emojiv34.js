const fs = require("fs");
module.exports.config = {
	name: "emojiv342",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix:true,
	description: "nazrul",
	category: "nazrul",
	usages: "🤗",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💪")==0 || event.body.indexOf("😐")==0 || event.body.indexOf("🙏")==0 || event.body.indexOf("👍")==0) {
		var msg = {
				body: "আহা সোনা গো আমার তোমার কি ক্যালসিয়ামের অভাব হাত মারা বাদ দিয়ে বিয়ে করে ফেলো😹\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/emojiv34.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }