import { dbConfig } from "./interface/database.interface";
import * as dotenv from "dotenv";
import { Dialect } from "sequelize";

dotenv.config()

export const databaseConfig: dbConfig = {
    development: {
        dialect: ("sqlite" as Dialect),
        storage: process.env.SQLITE_STORAGE || "./database.sqlite",
    }
}
