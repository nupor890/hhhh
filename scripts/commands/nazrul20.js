const fs = require("fs");
module.exports.config = {
	name: "npx31",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "npx31",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙃")==0 || event.body.indexOf("🙃")==0 || event.body.indexOf("🙃")==0 || event.body.indexOf("🙃")==0) {
		var msg = {
				body: "বুঝতে পারছি তোমার মন খারাপ তাই আমার বস মিকাইল.তুমার জন্য গানটি লিখেছে🙂💔 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx31.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }