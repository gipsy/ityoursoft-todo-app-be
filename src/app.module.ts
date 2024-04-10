import { Module } from '@nestjs/common'
import { TodoModule } from './todo/todo.module'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TodoModule,
    DatabaseModule
  ]
})
export class AppModule {}
