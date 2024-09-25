import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './common/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

// export type User = {
//     userId: number;
//     username: string;
//     password: string;
//   };
  
  // Mock up data 
  const users: User[] = [
    {
      userId: 1,
      username: 'dav',
      password: '123',
    },
    {
      userId: 2,
      username: 'test',
      password: '1234',
    }
  ];
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  
  async create(createUserDto: CreateUserDto): Promise<{user: User, token: string}> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.usersRepository.create({ ...createUserDto, password: hashedPassword });
    this.usersRepository.save(user);

    // Generate a token for the newly created user
    const token = this.jwtService.sign({ userId: user.userId, username: user.username });

    // Return the user data and token
    return { user, token };
  
  }

  async getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async getById(userId: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { userId: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  async update(userId: number, updateUserDto: Partial<CreateUserDto>): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { userId: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${{ where: { userId: userId } }} not found`);
    }

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    await this.usersRepository.update(userId, updateUserDto);
    return this.usersRepository.findOne({ where: { userId: userId } });
  }

  async remove(userId: number): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { userId: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${{ where: { userId: userId } }} not found`);
    }
    await this.usersRepository.delete(userId);
  }

    async findUserByName(username:string):Promise< User|undefined>{
        return users.find((user)=> user.username == username);
    }
}
