import { Table, Column, Model, DataType, CreatedAt, BelongsTo, HasMany } from 'sequelize-typescript';
import { Pet } from '../pet/pet.entity'

@Table({tableName: 'users', timestamps: true})
export class User extends Model<User>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true
    })
    seq: number;

    @Column({
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4
    })

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    user_name: string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    password: string;

    @HasMany(()=> Pet)
    pets: []
}