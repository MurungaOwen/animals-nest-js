import { User } from "../users/user.entity";
import { SEQUELIZE } from "../constants";
import { databaseConfig } from "./db.config";
import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async() => {
            const config = databaseConfig.development;
            const sequelize = new Sequelize(config)
            sequelize.addModels([User]);
            await sequelize.sync();
            return sequelize;
        }
    }
]