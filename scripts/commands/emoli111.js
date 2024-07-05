const fs = require("fs");
module.exports.config = {
	name: "emojiv121",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix:true,
	description: "nazrul",
	category: "nazrul",
	usages: "👙",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Amogus")==0 || event.body.indexOf("👙")==0 || event.body.indexOf("👙")==0) {
		var msg = {
				body: "আ্ঁমা্ঁর্ঁ নু্ঁনু্ঁ না্ঁই্ঁ দে্ঁখে্ঁ কি্ঁ ক্ঁর্ঁমু্ঁ 🙈🥀\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/brapenti.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
