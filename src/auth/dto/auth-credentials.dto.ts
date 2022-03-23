import { IsString, Max, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8, {message: 'password must have at least 8 characters'})
    @MaxLength(32)
    password: string;
}