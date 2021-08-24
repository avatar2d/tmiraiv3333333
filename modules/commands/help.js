module.exports.config = {
	name: "help",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "🌎",
	description: "Cái help fake spermbot 🌝",
	commandCategory: "group",
	usages: "",
	cooldowns: 0,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("help") != 0) return;

	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["con bot này thông minh hơn bạn","bạn đã biết 😁","tôi không có khả năng hiểu con gái","con bot này giúp bạn hỗ trợ trong việc học","spam bot tôi sẽ ban bạn khỏi người dùng bot","việc bạn đang làm là vô nghĩa 😙","cái gì chưa biết chỉ cần biết là được","con chuột bị ốm uống thuốc chuột thì tại sao con chuột lại chết ?","chảy máu cam nhưng sao màu máu là màu đỏ ?","Vào ngày 4 tháng 2 năm 2004, Zuckerberg đã phát hành TheFacebook ban đầu được đặt tại thefacebook.com","1,3 tỷ tài khoản giả bị xóa bởi facebook hàng năm","các chuyên gia về giấc ngủ đã xác định được các chú chó thường mơ về chủ","cho đến tận năm 1914 vẫn có thể gửi trẻ em qua đường bưu điện tại Mỹ","chim cánh cụt có một cơ quan phía trên mắt, giúp nó biến đổi nước mặn thành nước ngọt","trung bình một người phụ nữ mất gần 1 năm cuộc đời để quyết định mặc gì","một con chó bình thường có thể đếm đến 5 và nhớ 165 từ","cụ ông ED KYDD 101 tuổi vẫn làm tình nguyện viên cho chương trình Meal On Wheels","ăn Chocolate giúp giảm stress, tăng cường trí nhớ, thần sắc và hệ miễn dịch","lần đầu tiên trung quốc đã sử dụng kỹ thuật nhân bản vô tính để tạo ra những chú khỉ khoẻ mạnh","đôi chân của bạn có thể tạo ra 1 cốc mồ hôi trong một ngày","SOPHIA, là ROBOT đầu tiên được cấp quyền công dân trên thế giới","tại trung quốc người ta làm món Sushi từ gián","nếu bạn đếm tiếng dế kêu trong 25 giây rồi đem chia cho 3, lấy kết quả cộng thêm 4 sẽ ra nhiệt độ không khí","nọc độc rắn Boomslang ở châu phi khiến chúng ta chảy máu từ mọi kẽ hở trên cơ thể","nếu tầng Ô ZÔN bị phá huỷ hoàn toàn thì da chúng ta sẽ bị cháy nắng khủng khiếp chỉ sau khoảng 6 phút","người phát minh ra giấy vệ sinh hiện đại được in tên lên mỗi cuộn giấy","tên đệm của chú vịt donald là fauntleroy","JOHN HARVEY KELLOGG phát minh ra cốm bắp nhằm mục đích ngăn mọi người bớt thẩm du","một công ty ở úc sản xuất loại bia có MEN BIA lấy từ lỗ rốn","trái tim chúng ta đập hơn 100.000 lần một ngày","ở nhật bản, mèo đen được xem là may mắn","tiền giấy có từ thời nhà trần chứ không phải nhà hồ","một con nhện trung bình giăng hơn 4,6 km tơ trong toàn bộ cuộc đời","trung quốc sản xuất nhiều thịt lợn hơn tất cả các nước cộng lại","những cuốn sổ ghi chép của MARIE CURIE vẫn còn phát phóng xạ và chúng sẽ còn tồn tại 1500 năm nữa","trong những việc gây đau đớn, đau đẻ chỉ xếp thứ 2 sau việc bị thiêu sống","bộ não con người chỉ chiếm 2% trọng lượng cơ thể, nhưng cần tới 20% lượng oxi và calor mà cơ thể tiêu thụ","tại nhật bản người ta lắp các rãnh dành riêng cho rùa để di chuyển qua các đường ray","một công ty tại Anh, cung cấp dịch vụ kết hợp tro hoả tán vào pháo hoa","kẹo bông đường được phát minh bởi một nha sĩ","kinh thánh cấm nam giới không được cạo râu quai nón","trước khi đồng hồ báo thức được sản xuất đại trà thì có một số người làm nghề gõ cửa nhà để đánh thức người khác dậy đi làm gọi là KNOCKER-UP","theo một nghiên cứu năm 2015 nhìn nụ cười của một em bé có tác dụng lên não bạn tương đương với việc được cho 22,000 đô la","có hơn 200 người bị đóng băng hiện vẫn nằm lại trên đỉnh EVEREST","RUBIK luôn có thể được giải với chỉ 20 bước hoặc ít hơn","1/3 lượng tất trên thế giới được sản xuất tại các nhà máy ở trung quốc","tim của hươu cao cổ nặng khoảng 11 kilogram","khi bà ngoại mang thai mẹ thì bà cũng đã mang một phần của bạn vì tất cả trứng của người phụ nữ đã có ngay từ khi còn trong bào thai","cá heo ngủ với một mắt vẫn mở",];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `Bây giờ là: ${gio}\n[Bạn có biết?]: ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};