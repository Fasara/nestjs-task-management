 // define a dto then define the validation rules using decorators in the DTO.

import { IsEnum } from "class-validator";
import { TaskStatus } from "../task-status.enum";

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus;
}