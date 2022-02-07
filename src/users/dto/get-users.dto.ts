import {IsString, IsInt, IsOptional } from "class-validator";

export class GetUsersDto {

    @IsOptional()
    firstName: any;

    @IsOptional()
    tasksAssigned: any;
}