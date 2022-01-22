import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'Kewin' },
    { id: 2, name: 'Marlon' },
    { id: 3, name: 'Pravin' },
    { id: 4, name: 'Vivian' },
    { id: 5, name: 'Adrian' },
    { id: 6, name: 'Anthony' },
  ];

  findAll(name: string) {
    if (name) {
      return this.users.filter(user => user.name === name)
    }
    return this.users;
  }

  findById(userId: number) {
    return this.users.find((obj) => obj.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser
  }
}
