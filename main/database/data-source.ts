import "reflect-metadata";
import { DataSource } from "typeorm";
import { Mail } from "./entity/Mail";
import { useDataSource } from "typeorm-extension";
import { app } from "electron";
import { options } from "../../lib/utils";

export const AppDataSource = new DataSource(options);
