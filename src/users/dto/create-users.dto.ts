import { IsEmail, IsEnum, IsNotEmpty, IsString, } from "class-validator";
export class CreateUsersDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    age: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsEnum(['Standard', 'Basic', 'Premium'],
        { message: 'subscription must be Standard, Basic or Premium' }
    )
    subscription: 'Standard' | 'Basic' | 'Premium';
}