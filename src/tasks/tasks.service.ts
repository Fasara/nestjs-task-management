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

	// getAllTasks(): Task[] {
	//     return this.tasks;
	// }
	//     

	//     const task: Task = {
	//         id: uuid(),
	//         title,
	//         description,
	//         status: TaskStatus.OPEN,
	//     };

	//     this.tasks.push(task);

	//     return task;
	// }

	// getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
	//     const { status, search } = filterDto;

	//     let tasks = this.getAllTasks();

	//     if(status){
	//         tasks = tasks.filter((task) => task.status === status);
	//     }

	//     if(search) {
	//         tasks = tasks.filter((task) => {
	//             if (task.title.includes(search) || task.description.includes(search)) {
	//                 return true;
	//             }

	//             return false;
	//         });
	//     }

	//     return tasks;
	// }

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

	// updateTaskStatus(id: string, status: TaskStatus) {
	//     const task =  this.getTaskById(id);
	//     task.status = status;
	//     return task;
	//     //extract the id and the status, and update the task's status
	//     //return the status in the response
	// }
}




/* 
	delete => doesn't check beforehand if the entity exists in the database

	remove => we have to pass an object entity. So when you call remove it's garanteed that the entity exists in the db

	When making calls to the db you want to minimize the amount of the times they have to call the db, why? Becasue:
	1. makes the app slower
	2. requires more scaling which it's expensive
*/