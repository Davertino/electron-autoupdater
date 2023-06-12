import "reflect-metadata";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import { createDatabase } from "typeorm-extension";
import { getItemDb } from "./mails/get";
import { options } from "../lib/utils";
import { AppDataSource } from "./database/data-source";
import createAccount from "./accounts/create";
import { Users } from "./database/entity/Users";
import fetchEmails from "./mails/recieve";
import { UpdateService } from "./updateService";
import { Mail } from "./database/entity/Mail";
import { app, dialog, BrowserWindow } from "electron";
import { autoUpdater } from "electron-updater";
import * as isDev from "electron-is-dev";
import ProgressBar from 'electron-progressbar';


const isDevelopment: boolean = isDev;

const isProd: boolean = process.env.NODE_ENV === "production";

require("dotenv").config();

    autoUpdater.autoDownload = false;
    autoUpdater.autoInstallOnAppQuit = true;

if (isProd) {
    serve({ directory: "app" });
} else {
   
}

(async () => {
    await app.whenReady();

    autoUpdater.autoDownload = false;
    console.log("Testie westie UwU");
  
    if (!isDev) {
        autoUpdater.checkForUpdates();
    }

    autoUpdater.on("update-not-available", () => {
});


    autoUpdater.on("update-available", () => {
        dialog.showMessageBox({
            type: "info",
            title: "Update Available",
            message: "A new version of Crail is available. Do you want to update now?",
            buttons: ["Update", "No"],
        }).then((result) => {
            const buttonIndex = result.response;
            if (buttonIndex === 0) {
                autoUpdater.downloadUpdate();
            }
        });
    });
      

    autoUpdater.on("update-downloaded", () => {
        dialog.showMessageBox({
            type: "info",
            title: "Update Ready",
            message: "Install and restart now?",
            buttons: ["Install", "Later"],
        }).then((result) => {
            const buttonIndex = result.response;
            if (buttonIndex === 0) {
                autoUpdater.quitAndInstall(true, false);
            }
        });
    });

        


    
  
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
        if (user.length != 0) {
            await mainWindow.loadURL(`app://./ezmail.html`);
        }
        await mainWindow.loadURL(`app://./home.html`);
    } else {
        const port = process.argv[2];
        if (user.length != 0) {
            return await mainWindow.loadURL(`http://localhost:${port}/ezmail`);
        }
        await mainWindow.loadURL(`http://localhost:${port}/home`);
    }
})();

app.on("window-all-closed", () => {
    app.quit();
});

