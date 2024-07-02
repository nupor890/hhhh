const fs = require("fs");
module.exports.config = {
	name: "npxs1111",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "npxs1111",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf(".👧")==0 || event.body.indexOf(".👧")==0 || event.body.indexOf(".👧")==0 || event.body.indexOf(".🤠")==0) {
		var msg = {
				body: "  তুমি যাচ্ছ দূরে যাও আমি বাধা দেবো না, তুমি যাও ভুলে কিন্তু আমাকে ভুলে যেতে বলোনা😅🤠\n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/bot13.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }