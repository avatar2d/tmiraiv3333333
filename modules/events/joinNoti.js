module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.4",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`Đ𝑎̃ 𝑘𝑒̂́𝑡 𝑛𝑜̂́𝑖 𝑣𝑜̛́𝑖 𝑏𝑜𝑥 𝑡ℎ𝑎̀𝑛ℎ 𝑐𝑜̂𝑛𝑔 ✅\n----------------------\n𝑉𝑢𝑖 𝑙𝑜̀𝑛𝑔 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑙𝑒̣̂𝑛ℎ: /menu đ𝑒̂̉ 𝑏𝑖𝑒̂́𝑡 𝑡𝑜𝑎̀𝑛 𝑏𝑜̣̂ 𝑙𝑒̣̂𝑛ℎ 𝑐𝑢̉𝑎 𝐵𝑜𝑡\n𝐶𝑎̉𝑚 𝑜̛𝑛 đ𝑎̃ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑏𝑜𝑡 𝑐𝑢̉a Lê Anh Trường \n𝐴𝑑𝑚𝑖𝑛 𝑏𝑜𝑡 𝐹𝐵: https://www.facebook.com/real.leanhtruong\nℂ𝕙𝕦́ 𝕪́: Đ𝕠̣𝕔 𝕜𝕚̃ 𝕥𝕣𝕒́𝕟𝕙 𝕥𝕣𝕦̛𝕠̛̀𝕟𝕘 𝕙𝕠̛̣𝕡 𝔹𝔸ℕ 𝔹𝕆𝕏 + 𝔹𝔸ℕ 𝕌𝕊𝔼ℝ\nhttps://www.facebook.com/9209278/posts/10107088637899713/?app=fbl`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `chao.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);

				if (!global.data.allUserID.includes(id)) {
					await Users.createData(id, { name: userName, data: {} });
					global.data.userName.set(id, userName);
					global.data.allUserID.push(id);
				}
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝐻𝑒𝑙𝑙𝑜 𝑐𝑜𝑛 𝑣𝑜̛̣ {name}.\n𝐶ℎ𝑎̀𝑜 𝑚𝑢̛̀𝑛𝑔 đ𝑎̃ đ𝑒̂́𝑛 𝑣𝑜̛́𝑖 {threadName}.\n{type} 𝑙𝑎̀ 𝑡ℎ𝑎̀𝑛ℎ 𝑣𝑖𝑒̂𝑛 𝑡ℎ𝑢̛́ {soThanhVien} 𝑐𝑢̉𝑎 𝑛ℎ𝑜́𝑚. 𝑇𝑢̛𝑜̛𝑛𝑔 𝑡𝑎́𝑐 𝑛ℎ𝑖𝑒̂̀𝑢 𝑣𝑎̀𝑜 𝑛ℎ𝑎 𝑘ℎ𝑜̂𝑛𝑔 𝑙𝑎̀ 𝑏𝑖̣ 𝑎̆𝑛 𝑘𝑖𝑐𝑘 đ𝑜́ 💜💜💜" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝑐𝑎́𝑐 𝑏𝑎̣𝑛' : '𝑏𝑎̣𝑛')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}