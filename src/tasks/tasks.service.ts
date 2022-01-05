import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;

        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);

        return task;
    }

    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
        const { status, search } = filterDto;

        let tasks = this.getAllTasks();

        if(status){
            tasks = tasks.filter((task) => task.status === status);
        }

        if(search) {
            tasks = tasks.filter((task) => {
                if (task.title.includes(search) || task.description.includes(search)) {
                    return true;
                }

                return false;
            });
        }

        return tasks;
    }

    getTaskById(id: string): Task {

        const foundTask =  this.tasks.find(task => task.id === id);

        if(!foundTask) {
            throw new NotFoundException();
        }

        return foundTask;  
    }

    deleteTask(id: string): void {
        const foundTask = this.getTaskById(id);
        this.tasks = this.tasks.filter((task) => task.id !== foundTask.id);
        //filter this array and only keep these tasks where the id isn't identical to the one I'm looking for => deleteTask(id: string) and I assign the new array to this.task
    }

    updateTaskStatus(id: string, status: TaskStatus) {
        const task =  this.getTaskById(id);
        task.status = status;
        return task;
        //extract the id and the status, and update the task's status
        //return the status in the response
    }
}