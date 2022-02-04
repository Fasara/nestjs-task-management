import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({name: 'first_name'})
    firstName: string;

    @Column({name: 'last_name'})
    lastName: string;

    @Column({name: 'tasks_assigned'})
    tasksAssigned: string;

}