import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    @Index({ unique: true })
    username: string;

    @Column()
    password: string;
}