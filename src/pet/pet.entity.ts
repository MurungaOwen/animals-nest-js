import { Column, BelongsTo, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.entity";
//import { databaseProviders } from "../../db/db.provider";

@Table({timestamps: true, tableName: "pets"})
export class Pet extends Model<Pet>{
    @Column({
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
        type: DataType.UUIDV4,
    })
    id: string;

    @Column({
        allowNull: false,
        validate: {
            notEmpty: true
        },
        type: DataType.STRING,
    })
    pet_name: string;

    @Column({
        type: DataType.ENUM('walking', 'flying'),
    })
    category: string;

    @Column({
        type: DataType.NUMBER,
    })
    age: number;

    @ForeignKey(()=> User)
    @Column({
        type: DataType.UUIDV4,
    })
    ownerId: string

    @BelongsTo(() => User)
    ownerDetails: User
}