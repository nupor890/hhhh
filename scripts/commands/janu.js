module.exports.config = {
    name: 'janu',
    version: '1.1.1',
    permission: 0,
    credits: 'islamick',
    prefix: true,
    description: 'Trò truyện cùng simi chat',
    category: 'Gọi bot',
    usages: '[hey simi]',
    cooldowns: 2,
};
const {
    get
} = require('axios');
const CN = `https://docs-api.jrtxtracy.repl.co/sim?type=ask&ask=`
//https://docs-api.jrtxtracy.repl.co/sim?type=ask&ask=sim%20%C6%A1i
module.exports.run = () => {};
module.exports.handleEvent = async function( {
    api, event
}) {
var hm =["[👋🏻] → 𝗖𝗵𝗮̀𝗼 𝗯𝗮̣𝗻, 𝘁𝗼̂𝗶 𝗹𝗮̀ 𝗯𝗼𝘁 𝗰𝘂̉𝗮 𝗧𝗵𝗶𝗲̣̂𝗻 𝗦𝗶𝗲̂𝘂 𝗡𝗵𝗮̂𝗻\n[💓] → 𝗕𝗮̣𝗻 𝗵𝗮̃𝘆 𝗱𝘂̀𝗻𝗴 .𝗵𝗲𝗹𝗽 đ𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 đ𝗮𝗻𝗴 𝗰𝗼́ 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗵𝗼𝗮̣̆𝗰 𝗰𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴 𝗻𝗵𝗮\n[💟] → 𝗡𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗵𝗼̛𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁 𝘁𝗵𝗶̀ 𝗱𝘂̀𝗻𝗴 .𝘁𝘁 𝗻𝗵𝗮\n[💝] → 𝗖𝗮̉𝗺 𝗼̛𝗻 𝗯𝗮̣𝗻 đ𝗮̃ 𝘁𝗶𝗻 𝘁𝘂̛𝗼̛̉𝗻𝗴 𝘃𝗮̀ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵\n[😘] → 𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝗰𝗼́ 𝗺𝗼̣̂𝘁 𝗻𝗴𝗮̀𝘆 𝘁𝗵𝗮̣̂𝘁 𝘃𝘂𝗶 𝘃𝗲̉","[👋🏻] → 𝗖𝗵𝗮̀𝗼 𝗯𝗮̣𝗻, 𝘁𝗼̂𝗶 𝗹𝗮̀ 𝗯𝗼𝘁 𝗰𝘂̉𝗮 𝗧𝗵𝗶𝗲̣̂𝗻 𝗦𝗶𝗲̂𝘂 𝗡𝗵𝗮̂𝗻\n[💓] → 𝗕𝗮̣𝗻 𝗵𝗮̃𝘆 𝗱𝘂̀𝗻𝗴 .𝗵𝗲𝗹𝗽 đ𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 đ𝗮𝗻𝗴 𝗰𝗼́ 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗵𝗼𝗮̣̆𝗰 𝗰𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴 𝗻𝗵𝗮\n[💟] → 𝗡𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗵𝗼̛𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁 𝘁𝗵𝗶̀ 𝗱𝘂̀𝗻𝗴 .𝘁𝘁 𝗻𝗵𝗮\n[💝] → 𝗖𝗮̉𝗺 𝗼̛𝗻 𝗯𝗮̣𝗻 đ𝗮̃ 𝘁𝗶𝗻 𝘁𝘂̛𝗼̛̉𝗻𝗴 𝘃𝗮̀ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵\n[😘] → 𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝗰𝗼́ 𝗺𝗼̣̂𝘁 𝗻𝗴𝗮̀𝘆 𝘁𝗵𝗮̣̂𝘁 𝘃𝘂𝗶 𝘃𝗲̉","[👋🏻] → 𝗖𝗵𝗮̀𝗼 𝗯𝗮̣𝗻, 𝘁𝗼̂𝗶 𝗹𝗮̀ 𝗯𝗼𝘁 𝗰𝘂̉𝗮 𝗧𝗵𝗶𝗲̣̂𝗻 𝗦𝗶𝗲̂𝘂 𝗡𝗵𝗮̂𝗻\n[💓] → 𝗕𝗮̣𝗻 𝗵𝗮̃𝘆 𝗱𝘂̀𝗻𝗴 .𝗵𝗲𝗹𝗽 đ𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 đ𝗮𝗻𝗴 𝗰𝗼́ 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗵𝗼𝗮̣̆𝗰 𝗰𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴 𝗻𝗵𝗮\n[💟] → 𝗡𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗵𝗼̛𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁 𝘁𝗵𝗶̀ 𝗱𝘂̀𝗻𝗴 .𝘁𝘁 𝗻𝗵𝗮\n[💝] → 𝗖𝗮̉𝗺 𝗼̛𝗻 𝗯𝗮̣𝗻 đ𝗮̃ 𝘁𝗶𝗻 𝘁𝘂̛𝗼̛̉𝗻𝗴 𝘃𝗮̀ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝗰𝘂̉𝗮 𝗺𝗶̀𝗻𝗵\n[😘] → 𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝗰𝗼́ 𝗺𝗼̣̂𝘁 𝗻𝗴𝗮̀𝘆 𝘁𝗵𝗮̣̂𝘁 𝘃𝘂𝗶 𝘃𝗲̉"]
  var t = hm[Math.random()*hm.length<<0]
    if (['bot', 'hi bot','bot đâu','bot off','bot ơi','bot xịn','kêu mọi người lên tương tác đi bot','Chào bot','hello bot','sim','sim ơi','bye bot','@Văn Thiện','thiện','@Văn Thiện'].includes(event.body.toLowerCase())) {
       api.sendMessage({body: `🤖 === [ 𝗠𝗜𝗥𝗔𝗜 𝗕𝗢𝗧 ] === 🤖\n━━━━━━━━━━━━━━━━━━\n${t}\n━━━━━━━━━━━━━━━━━━
👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘃𝗼̛́𝗶 𝗯𝗼𝘁`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://scrapi.apibot.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
  }, event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
    };
};
module.exports.handleReply = async function({
    handleReply: $, api, event
}) {
    const res = await get(`${CN}${encodeURI(event.body)}`);
   if (res.data.error) return api.sendMessage(`${res.data.error}`, event.threadID, (err, data) => global.client.hhandleReply.push({
       name: this.config.name,
       messageID: data.messageID,
       ask: event.body
   }), event.messageID); else api.sendMessage({body: `🤖==[ 𝗦𝗜𝗠 𝗦𝗜𝗠 𝗥𝗘𝗣𝗟𝗬 ]==🤖\n━━━━━━━━━━━━━━━━━━\n[💬] → 𝗕𝗼𝘁 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶: ${res.data.answer}\n━━━━━━━━━━━━━━━━━━\n👉 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗲̂́𝗽 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗲̂́𝗽`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://scrapi.apibot.repl.co/gai')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
};
