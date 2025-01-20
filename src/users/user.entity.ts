import { Table, Column, Model, DataType, CreatedAt } from 'sequelize-typescript';

@Table
export class User extends Model<User>{
    @Column({
        type: DataType.INTEGER,
    })
    seq: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull:false,
    })
    password: string;

    @CreatedAt
    created_at: Date;
}