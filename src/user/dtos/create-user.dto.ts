import { IsArray, IsDate, IsEmail, IsJSON, IsOptional, IsString, Matches, MaxLength, MinLength, ValidateNested } from "class-validator";
import { Characteristic } from "../interfaces/characteristic.inteface";

export class CreateUserDto {

    @IsString()
    organizationId: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    @MinLength(3)
    surname: string;

    @IsString()
    @IsOptional()
    address: string;

    @IsString()
    @IsOptional()
    birthday: string;

    @IsString()
    @IsOptional()
    memberSince: string;

    @IsString()
    @IsOptional()
    phone: string;

    @IsString()
    @IsOptional()
    dni: string;

    @IsOptional()
    characteristics: Characteristic[];
}