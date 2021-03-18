import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isbn: string;

    @Column()
    title: string;

    @Column()
    author: string;

}