import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Status {
  PENDING = 'pending',
  PROGRESS = 'progress',
  COMPLETED = 'completed'
}

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({
    type: "enum",
    enum: Status,
    default: Status.PENDING
  })
  status: Status

  constructor(todo: Partial<Todo>) {
    Object.assign(this, todo)
  }
}