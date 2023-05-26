import { app, dialog, BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';

export class UpdateService {
  public static init(): void {
    // Disable auto download
    autoUpdater.autoDownload = false;
    console.log("Testie westie UwU")

    // Check for updates when the app is ready
    app.whenReady().then(() => {
      autoUpdater.checkForUpdatesAndNotify();
    });

  }};