import {IsString, IsInt } from "class-validator";

export class GetUsersDto {

    @IsString()
    firstName: string;

    @IsInt()
    tasksAssigned: number;
}