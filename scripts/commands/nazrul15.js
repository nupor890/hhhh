const fs = require("fs");
module.exports.config = {
	name: "npxs8",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "npxs8",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Love")==0 || event.body.indexOf("I love you")==0 || event.body.indexOf("love")==0 || event.body.indexOf("i love u")==0) {
		var msg = {
				body: "-ভাৃ্ঁলোৃ্বাৃ্সা্ৃরৃ্ মাৃ্রেৃ্ বাপ*🤨🖕 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/love.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }