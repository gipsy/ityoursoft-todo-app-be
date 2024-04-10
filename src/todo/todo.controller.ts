import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodos() {
    return this.todoService.getAll()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(201)
  @Post()
  async createTodo(@Body() dto: TodoDto) {
    return this.todoService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() dto: Partial<TodoDto>, 
  ) {
    return this.todoService.update(dto, id)
  }

  @HttpCode(200)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.todoService.delete(id)
  }
}
