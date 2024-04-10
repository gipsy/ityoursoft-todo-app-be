import { Transform } from "class-transformer"
import { IsEnum, IsOptional, IsString } from "class-validator"
import { Status } from "../todo.entity"

export class TodoDto {
  @IsString()
  @IsOptional()
  name: string

  @IsString()
  @IsOptional()
  createdAt?: string

  @IsEnum(Status)
  @IsOptional()
  @Transform(({ value }) => ('' + value).toLowerCase())
  status: Status
}