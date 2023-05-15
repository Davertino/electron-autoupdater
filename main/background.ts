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

	AppDataSource.initialize();

	if (isProd) {
		await mainWindow.loadURL("app://./home.html");
	} else {
		const port = process.argv[2];
		await mainWindow.loadURL(`http://localhost:${port}/home`);
		mainWindow.webContents.openDevTools();
	}
})();

app.on("window-all-closed", () => {
	app.quit();
});

ipcMain.on("placeItemDb", async (event, arg) => {
	try {
		const res = await placeItemDb();
		return event.reply("placeItemDb", { status: "success" });
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

ipcMain.on("saveUser", async (event, arg) => {
	try {
		const res = await saveUser(arg);
		return event.reply("saveUser", { status: "success" });
	} catch (e) {
		event.reply("saveUser", { status: "error" });
	}
});
