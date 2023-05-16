import { DataSourceOptions } from "typeorm";
import { app } from "electron";
import { Mail } from "../main/database/entity/Mail";
import { Users } from "../main/database/entity/Users";

export const datadir = app.getPath("appData") + "/crail";

export const options: DataSourceOptions = {
  type: "sqlite",
  database: datadir + "/crail.db",
  entities: [Mail, Users],
};
