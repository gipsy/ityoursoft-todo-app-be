import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Todo } from './todo.entity'
import { TodoDto } from './dto/todo.dto'

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(dto: TodoDto) {
    const todo = this.todoRepository.create(dto)
    return this.todoRepository.save(todo)
  }

  async update(dto: Partial<TodoDto>, todoId: string) {
    return this.todoRepository.update(todoId, dto)
  }

  async delete(todoId: string) {
    return this.todoRepository.delete(todoId)
  }

  async getAll(): Promise<Todo[]> {
    return this.todoRepository.find()
  }
}