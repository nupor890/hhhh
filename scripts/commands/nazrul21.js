  const fs = require("fs");
module.exports.config = {
	name: "taka",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "taka",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("taka")==0 || event.body.indexOf("টাকা")==0 || event.body.indexOf("গরিব")==0 || event.body.indexOf("money")==0) {
		var msg = {
				body: "বস_মিকাইল_.বলেছে টাকা ছাড়া দুনিয়া চলে না তাই হাত পা ভালো থাকতে কাজ করে খাও....!! \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/taka.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }