import { Mail } from "../database/entity/Mail";

export async function getItemDb() {
	const allUsers = await Mail.find();
}
