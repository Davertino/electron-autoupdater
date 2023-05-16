import Imap from "node-imap";
import process from "process";
export default function fetchEmails(callback) {
	// Tijdelijk: Later invullen met data uit database

	let imap = new Imap({
		user: process.env.NEXT_PUBLIC_MAIL_USER,
		password: process.env.NEXT_PUBLIC_MAIL_PASS,
		host: process.env.NEXT_PUBLIC_MAIL_HOST,
		port: 993,
		tls: true,
	});
	const messages = [];

	imap.once("ready", () => {
		imap.openBox("INBOX", false, (err, box) => {
			if (err) return callback(err);
			console.log("box", box);
			imap.search(["6:10"], (err, results) => {
				if (err) return callback(err);
				results.forEach((messageId) => {
					const fetchOptions = {
						bodies: ["HEADER.FIELDS (FROM TO SUBJECT DATE)"],
						struct: true,
					};

					const message = {
						id: messageId,
						headers: {},
					};

					const fetch = imap.fetch(messageId, fetchOptions);

					fetch.on("message", (msg) => {
						msg.on("body", (stream, info) => {
							let buffer = "";
							stream.on("data", (chunk) => {
								buffer += chunk.toString("utf8");
							});
							stream.on("end", () => {
								const parsedHeaders = Imap.parseHeader(buffer);
								message.headers = parsedHeaders;
							});
						});
					});

					fetch.on("end", () => {
						messages.push(message);
						if (messages.length === results.length) {
							imap.end();
							callback(null, messages);
						}
					});
				});
			});
		});
	});

	imap.once("error", (err) => {
		callback(err);
	});

	imap.once("end", () => {
		console.log("Connection ended");
	});

	imap.connect();
}
