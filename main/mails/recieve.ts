import Imap from "node-imap";
import { Users } from "../database/entity/Users";

export default async function fetchEmails(callback) {
  const user = await Users.find({
    order: {
      id: "asc",
    },
  });

  let imap = new Imap({
    user: user[0].username,
    password: user[0].password,
    host: user[0].incomingServer,
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
            bodies: ["HEADER.FIELDS (FROM TO SUBJECT DATE)", "TEXT"],
            struct: true,
          };

          const message = {
            id: messageId,
            headers: {},
            body: "",
          };

          const fetch = imap.fetch(messageId, fetchOptions);

          fetch.on("message", (msg) => {
            msg.on("body", (stream, info) => {
              let buffer = "";
              stream.on("data", (chunk) => {
                buffer += chunk.toString("utf8");
              });
              stream.on("end", () => {
                if (info.which === "HEADER.FIELDS (FROM TO SUBJECT DATE)") {
                  const parsedHeaders = Imap.parseHeader(buffer);
                  message.headers = parsedHeaders;
                } else if (info.which === "TEXT") {
                  message.body = buffer;
                }
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
