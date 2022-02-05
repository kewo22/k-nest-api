import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepo: Repository<User>) { }

  // private users: User[] = [
  //   { id: 1, name: 'Kewin' },
  //   { id: 2, name: 'Marlon' },
  //   { id: 3, name: 'Pravin' },
  //   { id: 4, name: 'Vivian' },
  //   { id: 5, name: 'Adrian' },
  //   { id: 6, name: 'Anthony' },
  // ];

  findAll(name: string): Promise<User[]> {
    return this.usersRepo.find();
  }

  async findById(userId: number): Promise<User> {
    try {
      const user = await this.usersRepo.findOneOrFail(userId);
      return user;
    } catch (err) {
      throw err;
    }
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepo.create({ ...createUserDto });
    return this.usersRepo.save(newUser);
  }

  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.findById(id);
    user.name = name;
    return this.usersRepo.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.findById(id);
    return this.usersRepo.remove(user)
  }
}
