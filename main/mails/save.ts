import { Mail } from "../database/entity/Mail";


export async function placeItemDb({
	sender,
	recievers,
	subject,
	body,
	sent,
	sentDate,
	attachment,
}: {
	sender: string;
	recievers: string;
	subject?: string;
	body: string;
	sent: boolean;
	sentDate: Date;
	attachment?: string;
}) {
	const mail = new Mail();

	mail.sender = sender;
	mail.recievers = recievers;
	mail.subject = subject;
	mail.body = body;
	mail.sent = sent;
	mail.sentDate = sentDate;
	mail.attachment = attachment;

	return await mail.save();
}
