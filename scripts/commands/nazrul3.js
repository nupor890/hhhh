const fs = require("fs");
module.exports.config = {
	name: "npxs21",
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
	if (event.body.indexOf(".🌹")==0 || event.body.indexOf("🌹")==0 || event.body.indexOf(".🥀")==0 || event.body.indexOf("🥀")==0) {
		var msg = {
				body: "যদি ভালো হতে চাও তবে সর্বপ্রথম তুমি মিথ্যা বলা ছেড়ে দাও🍁🍼🐒 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/bristi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😮", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }