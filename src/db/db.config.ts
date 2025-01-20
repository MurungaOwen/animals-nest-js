import { dbConfig } from "./interface/database.interface";
import * as dotenv from "dotenv";
import { Dialect } from "sequelize";

dotenv.config()

export const databaseConfig: dbConfig = {
    development: {
        dialect: ("sqlite" as Dialect), // Ensure this matches Dialect type
        storage: process.env.SQLITE_STORAGE || "./database.sqlite", // Path to SQLite database file
    }
}



