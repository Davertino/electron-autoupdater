import { PrismaClient } from "../database/generated/client";

function saveEmails(emails: any) {
	const prisma = new PrismaClient();
	//save email in db using prisma
	emails.forEach((email) => {
		prisma.email.create({
			data: {
				// id: email.id,
				sender: email.headers.from,
				recipient: email.headers.to,
				subject: email.headers.subject,
				timestamp: email.headers.date,
				body: email.body,
			},
		});
	});

	return true;
}
