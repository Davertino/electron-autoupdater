import { Users } from "../database/entity/Users";

export async function saveUser({
	email,
	username,
	password,
	accountType,
	incomingServer,
	outgoingServer,
}: {
	email: string;
	username: string;
	password: string;
	accountType: string;
	incomingServer: string;
	outgoingServer: string;
}) {
	const user = new Users();

	user.email = email;
	user.username = username;
	user.password = password;
	user.accountType = accountType;
	user.incomingServer = incomingServer;
	user.outgoingServer = outgoingServer;
	return await user.save();
}
