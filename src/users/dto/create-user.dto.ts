import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsOptional()
    tasksAssigned: any;
}