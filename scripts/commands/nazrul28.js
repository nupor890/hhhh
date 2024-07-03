const fs = require("fs");
module.exports.config = {
	name: "😱",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "😱",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😯")==0 || event.body.indexOf("😲")==0 || event.body.indexOf("😱")==0 || event.body.indexOf("🙀")==0) {
		var msg = {
				body: "এৃ্ঁভাৃ্ঁবেৃ্ঁ অৃ্ঁবাৃ্ঁকৃ্ঁ হৃ্ঁয়েৃ্ঁ কিৃ্ঁ দেৃ্ঁখোৃ্ঁ প্রি্ৃঁয়্ঁ😒😦👀 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/JB.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }