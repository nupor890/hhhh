  const fs = require("fs");
module.exports.config = {
	name: "🐒",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "🐒",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙊")==0 || event.body.indexOf("🙈")==0 || event.body.indexOf("🤭")==0 || event.body.indexOf("🫢")==0) {
		var msg = {
				body: ".মিৃঁকাৃঁইৃঁলৃঁ BoSs.... বাৃ্ঁবুৃ্ঁ ত্যাৃ্ঁহৃ্ঁ লৃ্ঁজ্জাৃ্ঁ পাৃ্ঁইৃ্ঁসোৃ্ঁ🙃🤡 \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/MRK.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }