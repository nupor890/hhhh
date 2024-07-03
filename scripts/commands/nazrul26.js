  const fs = require("fs");
module.exports.config = {
	name: "😒",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul",
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "😒",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😐")==0 || event.body.indexOf("😳")==0) {
		var msg = {
				body: "সফল মানুষ হতে চাইলে, সর্বপ্রথম অসফল হতে ভয় পেওনা।🥀আমার বস মিকাইল বলচে☺️ \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/simanto2.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }