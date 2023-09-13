import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null })
    name: string;

    @Column({ default: null })
    email: string;

    @Column({ default: null })
    password: string;

    @Column({ default: null })
    phone_no: number;

}
