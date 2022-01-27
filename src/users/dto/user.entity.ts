import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'User' })
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({name: 'first_name'})
    firstName: string;

    @Column({name: 'last_name'})
    lastName: string;

}