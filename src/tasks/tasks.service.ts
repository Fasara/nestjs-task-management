import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './dto/task.entity';

@Injectable()
export class TasksService {
	constructor(
		@InjectRepository(TasksRepository)
		private tasksRepository: TasksRepository,
	) { }

	getAllTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
		return this.tasksRepository.getAllTask(filterDto);
	}
	    
	async getTaskById(id: string): Promise<Task> {
		const foundTask = await this.tasksRepository.findOne(id);

		if (!foundTask) {
			throw new NotFoundException(`Task with ID "${id}" not found`);
		}

		return foundTask;
	}

	createTask(createTaskDto: CreateTaskDto): Promise<Task> {
		return this.tasksRepository.createTask(createTaskDto);
	}

	async deleteTask(id: string): Promise <void> {
		const result = await this.tasksRepository.delete(id);

		if(result.affected === 0) {
			throw new NotFoundException(`Task with ID ${id} not found`) 
		}
		
	}
  
	async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
		const task = await this.getTaskById(id);

		task.status = status;
		await this.tasksRepository.save(task);

		return task;
	}
}




/* 
	delete => doesn't check beforehand if the entity exists in the database

	remove => we have to pass an object entity. So when you call remove it's garanteed that the entity exists in the db

	When making calls to the db you want to minimize the amount of the times they have to call the db, why? Becasue:
	1. makes the app slower
	2. requires more scaling which it's expensive
*/