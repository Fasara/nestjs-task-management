import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-tasks-status.dto';
import { Task } from './dto/task.entity';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) { }

	//If we have any filter defined, call taskService.getTaskWithFilters
	//Otherwise, just get all tasks
	@Get()
	getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
		console.log('heyyyyy', filterDto, Task, typeof Task)
		return this.tasksService.getAllTasks(filterDto);
	}

	@Get('/:id')
	getTaskById(@Param('id') id: string): Promise<Task> {
		return this.tasksService.getTaskById(id);
	}

	@Post()
	createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
		return this.tasksService.createTask(createTaskDto);
	}

	@Delete('/:id')
	deleteTask(@Param('id') id: string): Promise<void> {
		return this.tasksService.deleteTask(id);
	}

	@Patch('/:id/status')
	updateTaskStatus(
		@Param('id') id: string,
		@Body() updateTaskStatusDto: UpdateTaskStatusDto): Promise<Task> {
		const { status } = updateTaskStatusDto;
		return this.tasksService.updateTaskStatus(id, status);
	}

}