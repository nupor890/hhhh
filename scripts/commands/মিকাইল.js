const fs = require("fs");
module.exports.config = {
	name: "kawsarss",
    version: "1.0.1",
	permission: 0,
	credits: "nazrul", 
  prefix: true,
	description: "Kawsar",
	category: "no prefix",
	usages: "kawsarss",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Md Mikail")==0 || event.body.indexOf("মিকাইল")==0 || event.body.indexOf("@ⵗⵗ̥̥̊̊ⵗ̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̥̥̥̥̥̊̊ ⵗ̥̥̥̥̥̥̥̥̥̥̥ⵗ̥̥̥̥̥̥̥̥̥̥̊̊ⵗ̥̥̥̥̥̥̥̥̥̊̊̊ⵗ̥̥̥̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̥̊̊̊̊̊ⵗ̥̥̥̥̥̊̊̊̊ⵗ̥̥̥̥̊̊̊ⵗ̥̥")==0 || event.body.indexOf("KAWSAR")==0) {
		var msg = {
				body: "বস মিকাইল কে ডাকছেন কেন?  বস মিকাইল এর Profile Screenshot   I Love You যদি তুমি মেয়ে হও\nhttps:/m.me/puteri.aleesya.125 নক দাও😽😽-!",
				attachment: fs.createReadStream(__dirname + `/noprefix/mikail22.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
