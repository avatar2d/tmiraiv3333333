module.exports.config = {
	name: "trinh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh trai xinh nhất Việt Nam :))",
	commandCategory: "Hình ảnh",
	usages: "trinh",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies  }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 1000) {
	axios.get('https://ngoctrinh.hungdz30cm.repl.co/').then(res => {
	var callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + '/cache/trinh.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/trinh.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/trinh.jpg')).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 1000}));
			})
	} else return api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID);
}
