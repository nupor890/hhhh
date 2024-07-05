const fs = require("fs");
module.exports.config = {
	name: "emojiv12",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul",
	prefix:true,
	description: "nazrul",
	category: "nazrul",
	usages: "freind",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("friend")==0 || event.body.indexOf("বন্ধু")==0 || event.body.indexOf("dost")==0 || event.body.indexOf("দোস্ত")==0) {
		var msg = {
				body: "----------🖤---------\n বন্ধু মানে ভালোবাসা 🥰\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/freind.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }