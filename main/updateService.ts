import { autoUpdater } from 'electron-updater';

export class UpdateService {
  public static init(): void {
    autoUpdater.checkForUpdatesAndNotify();
  }
}
