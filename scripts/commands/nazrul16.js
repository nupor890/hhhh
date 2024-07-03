const fs = require("fs");
module.exports.config = {
	name: "npxs5",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "npxs5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Crush")==0 || event.body.indexOf("crush")==0 || event.body.indexOf("ক্রাশ")==0 || event.body.indexOf("সুন্দর")==0) {
		var msg = {
				body: "-.,, সুন্দর চায় না,,, শুধু ভালো মনের বিশ্বাস রাখার মত একজন চায় আমার বস_মিকাইল_,🙂 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs5.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }