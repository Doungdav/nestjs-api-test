import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./common/dto/create-user.dto";
import { User } from "./user.entity";
import { UpdateUserDto } from "./common/dto/update-user.dto";
import { PassportJwtAuthGuard } from "src/auth/guards/passport-jwt.guard";

@Controller('users')
@UseGuards(PassportJwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') userId: number): Promise<User> {
    return this.usersService.getById(userId);
  }

  @Put(':id')
  async update(@Param('id') userId: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') userId: number): Promise<void> {
    return this.usersService.remove(userId);
  }

}