import Imap from "node-imap";
import Validator from "validatorjs";
import { saveUser } from "../Users/save";

function connectToImap(username, password, incomingServer) {
  return new Promise((resolve, reject) => {
    let imap = new Imap({
      user: username,
      password: password,
      host: incomingServer,
      port: 993,
      tls: true,
    });

    console.log("hoi");

    imap.once("ready", function () {
      console.log("IMAP-connectie geslaagd!");
      imap.end();
      resolve("IMAP-connectie geslaagd!");
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
    return {
      message: "There were some validation errors",
      statusCode: 400,
      data: {},
      errors: validation.errors.all(),
    };
  }

  try {
    await connectToImap(username, password, incomingServer);

    saveUser(mailData);

    return {
      message: "Account succesvol aangemaakt!",
      statusCode: 200,
      data: {},
      errors: {},
    };
  } catch (error) {
    return {
      message: "There was an error creating the account",
      statusCode: 500,
      data: {},
      errors: error,
    };
    return error;
  }
}
