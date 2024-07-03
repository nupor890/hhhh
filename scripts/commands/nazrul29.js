const fs = require("fs");
module.exports.config = {
	name: "🙄",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul",
	prefix: true,
	description: "hihihihi",
	category: "no prefix",
	usages: "🙄",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf(".🙄")==0 || event.body.indexOf(".😦")==0) {
		var msg = {
				body: "অৃ্ঁই্ঁ বে্ৃঁডি্ৃঁ ওৃ্ঁইৃ্ দি্ৃঁকেৃ্ঁ কিৃ্ দেৃ্ঁখৃ্ঁসৃ্ঁ😒🤷‍♂️আ্ঁমা্ঁর্ঁ ব্ঁস্ঁ _মি্ঁকা্ঁই্ঁল্ঁ_.এ্ঁই্ঁ দি্ঁকে্ঁ \n✢━━━━━━━━━━━━━━━✢\n----❖----- 𝐌𝐈𝐊𝐀𝐈𝐋 -----❖----",
				attachment: fs.createReadStream(__dirname + `/noprefix/JM.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }