module.exports.config = {
  name: "aotoreact2",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "..",
  prefix: false,
  category: "...",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("wow") || react.includes("Wow") || react.includes("ভালো ") || react.includes("valo") || react.includes("riya") || react.includes("গজল") || react.includes("Google ") || react.includes("google") || react.includes("নামাজে ") || react.includes("মসজিদ") || react.includes("রাসূল ") || react.includes("রাসুলুল্লাহ ") || react.includes("beautiful") || react.includes("Beautiful") || react.includes("uid") || react.includes("মাদ্রাসা") || react.includes("মাহফিল") || react.includes("নামাজে যাবো") || react.includes("Riya") || react.includes("Robot") || react.include("mother") || react.includes("Father") || react.includes("roja") ||  react.includes("বাবা") || react.includes(" মা") || react.includes("বোন") || react.includes("Sister") || react.includes("sister") || react.includes("Vai") || react.includes("vai") || react.includes("tech") || react.includes("Tech") || react.includes("better") || react.includes("Better") || react.includes("rich") || react.includes("Rich") || react.includes("😘") || react.includes("নজরুন")) {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
