import { IsString, IsNumber, IsEnum, Min } from 'class-validator';
type petCategory = "walking" | "flying";

export class petDto{

    @IsString()
    readonly pet_name: string;

    @IsEnum(["walking", "flying"])
    readonly category: petCategory;

    @IsNumber()
    @Min(0)
    readonly age: number;
    
    @IsString()
    readonly owner_name: string;
}