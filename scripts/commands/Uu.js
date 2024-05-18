module.exports.config = {
  name: "u",
	version: "1.0.0",
	permission: 0,
	credits: "Nayan",
	prefix: "noprefix",
	description: "get user id.",
	category: "without prefix",
	cooldowns: 5
};

module.exports.run = async function({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) {
const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply") { 
      let name = await Users.getNameUser(event.messageReply.senderID) 
  uid = event.messageReply.senderID
  var callback = () =>   api.sendMessage({body:`╠    𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗦𝗧𝗔𝗟𝗞    ╣
                ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
 
                • 𝗡𝗮𝗺𝗲: ${apiResponse.name}
                • 𝗙𝗮𝘀𝘁: ${apiResponse.fast}
                • 𝗨𝘀𝗲𝗿 𝗜𝗗: ${apiResponse.uid}
                • 𝗨𝘀𝗲𝗿 𝗡𝗮𝗺𝗲: ${apiResponse.user_name}
                • 𝗜𝗗 𝗟𝗶𝗻𝗸: ${apiResponse.idlink}
                • 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 𝗦𝘁𝗮𝘁𝘂𝘀: ${apiResponse.rlsn}
                • 𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆: ${apiResponse.birthday}
                • 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀: ${apiResponse.follow}
                • 𝗛𝗼𝗺𝗲: ${apiResponse.home}
                • 𝗟𝗼𝗰𝗮𝗹: ${apiResponse.local}
                • 𝗟𝗼𝘃𝗲: ${apiResponse.love}
                • 𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱: ${apiResponse.verify}
                • 𝗪𝗲𝗯: ${apiResponse.web}
                • 𝗤𝘂𝗼𝘁𝗲𝘀: ${apiResponse.quotes}
                • 𝗔𝗯𝗼𝘂𝘁: ${apiResponse.about}
                • 𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗗𝗮𝘁𝗲: ${apiResponse.account_crt}
                ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    if (!args[0]) {
      var uid = event.senderID;
      const res = await axios.get(`https://www.nguyenmanh.name.vn/api/fbInfo?id=${uid}&apikey=LV7LWgAp`);
var name = res.data.result.name 
        var callback = () =>  api.sendMessage({body:`╠    𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗦𝗧𝗔𝗟𝗞    ╣
                ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
 
                • 𝗡𝗮𝗺𝗲: ${apiResponse.name}
                • 𝗙𝗮𝘀𝘁: ${apiResponse.fast}
                • 𝗨𝘀𝗲𝗿 𝗜𝗗: ${apiResponse.uid}
                • 𝗨𝘀𝗲𝗿 𝗡𝗮𝗺𝗲: ${apiResponse.user_name}
                • 𝗜𝗗 𝗟𝗶𝗻𝗸: ${apiResponse.idlink}
                • 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 𝗦𝘁𝗮𝘁𝘂𝘀: ${apiResponse.rlsn}
                • 𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆: ${apiResponse.birthday}
                • 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀: ${apiResponse.follow}
                • 𝗛𝗼𝗺𝗲: ${apiResponse.home}
                • 𝗟𝗼𝗰𝗮𝗹: ${apiResponse.local}
                • 𝗟𝗼𝘃𝗲: ${apiResponse.love}
                • 𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱: ${apiResponse.verify}
                • 𝗪𝗲𝗯: ${apiResponse.web}
                • 𝗤𝘂𝗼𝘁𝗲𝘀: ${apiResponse.quotes}
                • 𝗔𝗯𝗼𝘂𝘁: ${apiResponse.about}
                • 𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗗𝗮𝘁𝗲: ${apiResponse.account_crt}
                ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    else {
  if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await api.getUID(args[0]);
   var name = data.name
var data = await api.getUserInfoV2(res_ID);
    var username = data.username
    var link = data.link
    var callback = () => api.sendMessage({body:`╠    𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗦𝗧𝗔𝗟𝗞    ╣
                ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
 
                • 𝗡𝗮𝗺𝗲: ${apiResponse.name}
                • 𝗙𝗮𝘀𝘁: ${apiResponse.fast}
                • 𝗨𝘀𝗲𝗿 𝗜𝗗: ${apiResponse.uid}
                • 𝗨𝘀𝗲𝗿 𝗡𝗮𝗺𝗲: ${apiResponse.user_name}
                • 𝗜𝗗 𝗟𝗶𝗻𝗸: ${apiResponse.idlink}
                • 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 𝗦𝘁𝗮𝘁𝘂𝘀: ${apiResponse.rlsn}
                • 𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆: ${apiResponse.birthday}
                • 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀: ${apiResponse.follow}
                • 𝗛𝗼𝗺𝗲: ${apiResponse.home}
                • 𝗟𝗼𝗰𝗮𝗹: ${apiResponse.local}
                • 𝗟𝗼𝘃𝗲: ${apiResponse.love}
                • 𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱: ${apiResponse.verify}
                • 𝗪𝗲𝗯: ${apiResponse.web}
                • 𝗤𝘂𝗼𝘁𝗲𝘀: ${apiResponse.quotes}
                • 𝗔𝗯𝗼𝘂𝘁: ${apiResponse.about}
                • 𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗗𝗮𝘁𝗲: ${apiResponse.account_crt}
                ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); }
  else {
    if (args.join().indexOf('@') !== -1) 
      var uid = Object.keys(event.mentions) 
      var callback = () => 
api.sendMessage({body:`╠    𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗦𝗧𝗔𝗟𝗞    ╣
                ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
 
                • 𝗡𝗮𝗺𝗲: ${apiResponse.name}
                • 𝗙𝗮𝘀𝘁: ${apiResponse.fast}
                • 𝗨𝘀𝗲𝗿 𝗜𝗗: ${apiResponse.uid}
                • 𝗨𝘀𝗲𝗿 𝗡𝗮𝗺𝗲: ${apiResponse.user_name}
                • 𝗜𝗗 𝗟𝗶𝗻𝗸: ${apiResponse.idlink}
                • 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 𝗦𝘁𝗮𝘁𝘂𝘀: ${apiResponse.rlsn}
                • 𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆: ${apiResponse.birthday}
                • 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀: ${apiResponse.follow}
                • 𝗛𝗼𝗺𝗲: ${apiResponse.home}
                • 𝗟𝗼𝗰𝗮𝗹: ${apiResponse.local}
                • 𝗟𝗼𝘃𝗲: ${apiResponse.love}
                • 𝗩𝗲𝗿𝗶𝗳𝗶𝗲𝗱: ${apiResponse.verify}
                • 𝗪𝗲𝗯: ${apiResponse.web}
                • 𝗤𝘂𝗼𝘁𝗲𝘀: ${apiResponse.quotes}
                • 𝗔𝗯𝗼𝘂𝘁: ${apiResponse.about}
                • 𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗗𝗮𝘁𝗲: ${apiResponse.account_crt}
                ﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 

  }
}
}
