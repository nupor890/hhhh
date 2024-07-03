const fs = require("fs");
module.exports.config = {
	name: "npxs3",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "npxs3",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf(".😎")==0 || event.body.indexOf(".😎")==0 || event.body.indexOf(".😎")==0 || event.body.indexOf("😎")==0) {
		var msg = {
				body: "আমার বস মিকাইল বলছে//মানুষ মৃত্যু ছাড়া কখনো পুরোপুরি হারাতে পারেনা। মানুষ হারায় শুধু নির্দিষ্ট কিছু মানুষের কাছে। নিজেকে আড়াল করে নেয় দূরত্ব বাড়িয়ে দিয়ে..💔 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs3.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }