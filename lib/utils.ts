import { DataSourceOptions } from "typeorm";
import { app } from "electron";

export const datadir = app.getPath("appData") + "/crail";

export const options: DataSourceOptions = {
	type: "sqlite",
	database: datadir + "/crail.db",
};
