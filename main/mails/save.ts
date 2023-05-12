import { Mail } from "../database/entity/Mail";

export async function placeItemDb() {
	console.log("placeItemDb");
	const mail = new Mail();

	mail.sender = "sender@gmail.com";
	mail.recievers = "reciever@gmail.com";
	mail.subject = "subject";
	mail.body = "body";
	mail.sent = false;
	mail.sentDate = new Date();
	return await mail.save();
}
