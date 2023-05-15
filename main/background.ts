import "reflect-metadata";
import { app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import { createDatabase } from "typeorm-extension";
import { placeItemDb } from "./mails/save";
import { getItemDb } from "./mails/get";
import { options } from "../lib/utils";
import { AppDataSource } from "./database/data-source";
import { saveUser } from "./Users/save";
import createAccount from "./accounts/create";
import { Repository } from "typeorm";
import { Users } from "./database/entity/Users";
const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) {
	serve({ directory: "app" });
} else {
	app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
	await app.whenReady();

	// Create the database with specification of the DataSource options
	await createDatabase({
		options,
	});
	const mainWindow = createWindow("main", {
		width: 1000,
		height: 600,
	});

	await AppDataSource.initialize();

	const user = await Users.find();

	if (isProd) {
		if (user.length === 0) {
			await mainWindow.loadURL("app://./home.html");
		}
		await mainWindow.loadURL("app://./ezmail.html");
	} else {
		const port = process.argv[2];
		if (user.length === 0) {
			await mainWindow.loadURL(`http://localhost:${port}/home`);
		}
		await mainWindow.loadURL(`http://localhost:${port}/ezmail`);

		mainWindow.webContents.openDevTools();
	}
})();

app.on("window-all-closed", () => {
	app.quit();
});

ipcMain.on("placeItemDb", async (event, arg) => {
	try {
		const res = await placeItemDb();
		return event.reply("placeItemDb", { status: "ok" });
	} catch (e) {
		return event.reply("placeItemDb", { status: "error" });
	}
});

ipcMain.on("getItemDb", async (event, arg) => {
	try {
		const res = await getItemDb();
		return event.reply("getItemDb", res);
	} catch (e) {
		event.reply("getItemDb", { status: "error" });
	}
});

ipcMain.on("newUser", async (event, arg) => {
	try {
		const res = await createAccount(arg);

		console.log(res, "Response");
		return event.reply("newUser", res);
	} catch (e) {
		event.reply("newUser", { status: "error" });
	}
});
