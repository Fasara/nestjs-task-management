import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({name: 'first-name'})
    firstName: string;

    @Column({name: 'last-name'})
    lastName: string;

}