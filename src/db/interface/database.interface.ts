
import { Dialect } from "sequelize";
export interface dbAttributes{
    storage: string;
    dialect?: Dialect;
}

export interface dbConfig{
    development: dbAttributes;
}