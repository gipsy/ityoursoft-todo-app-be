import { Test, TestingModule } from '@nestjs/testing'
import { TodoService } from './todo.service'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Status, Todo } from './todo.entity'
import { EntityManager, Repository } from 'typeorm'

describe('TodoService', () => {
  let service: TodoService
  let todoRepository: Repository<Todo>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoService,
        {
          provide: getRepositoryToken(Todo),
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            save: jest.fn()
          }
        },
        {
          provide: EntityManager,
          useValue: {}
        }
      ]
    }).compile()

    service = module.get<TodoService>(TodoService)
    todoRepository = module.get<Repository<Todo>>(getRepositoryToken(Todo))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  test('create', async () => {
    const dto = {
      title: 'test',
      status: 'pending' as Status
    }
    await service.create(dto)
    expect(todoRepository.create).toHaveBeenCalled()
  })

  test('update', async () => {
    const dto = {
      title: 'test',
      status: 'pending' as Status
    }
    await service.update(dto, 'test')
    expect(todoRepository.update).toHaveBeenCalled()
  })

  test('delete', async () => {
    await service.delete('test')
    expect(todoRepository.delete).toHaveBeenCalled()
  })
  
  test('getAll', async () => {
    await service.getAll()
    expect(todoRepository.find).toHaveBeenCalled()
  })
})