const fs = require("fs");
module.exports.config = {
	name: "emojiv26",
		version: "1.0.1",
	hasPermssion: 0,
	credits: "Kawsar", 
	description: "Kawsar",
	commandCategory: "Kawsar",
	usages: "😘",
		cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😗")==0 || event.body.indexOf("😚")==0 || event.body.indexOf("💋")==0 || event.body.indexOf("😘")==0) {
		var msg = {
				body: "এ্ঁ স্ঁর্ঁ চু্ঁম্মা্ঁ চা্ঁপ্ঁটি্ঁ ক্ঁরি্ঁস্ঁ না্ঁত্ঁ 🙈🥀",
				attachment: fs.createReadStream(__dirname + `/Kawsar/chumma.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
		api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}