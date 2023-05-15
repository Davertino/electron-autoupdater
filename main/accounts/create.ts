import Imap from "node-imap";
import Validator from "validatorjs";

function connectToImap(username, password, incomingServer) {
  return new Promise((resolve, reject) => {
    let imap = new Imap({
      user: username,
      password: password,
      host: incomingServer,
      port: 993,
      tls: true,
    });

    imap.once("ready", function () {
      console.log("IMAP-connectie geslaagd!");
      imap.end();
      resolve();
    });

    imap.once("error", function (err) {
      console.log(err.message);
      imap.end();
      reject(err.message);
    });

    imap.connect();
  });
}

export default async function createAccount(mailData) {
  const {
    email,
    username,
    password,
    accountType,
    incomingServer,
    outgoingServer,
  } = mailData;

  const validation = new Validator(mailData, {
    email: "required|email",
    username: "required",
    password: "required",
    accountType: "required",
    incomingServer: "required",
    outgoingServer: "required",
  });

  if (validation.fails()) {
    return validation.errors.all();
  }

  console.log(
    email,
    username,
    password,
    accountType,
    incomingServer,
    outgoingServer
  );

  try {
    await connectToImap(username, password, incomingServer);
    return "Account created";
  } catch (error) {
    return error;
  }
}
