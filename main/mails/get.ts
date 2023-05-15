import { Mail } from "../database/entity/Mail";

export async function getItemDb() {
	return await Mail.find();
}
