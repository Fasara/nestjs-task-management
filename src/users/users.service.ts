import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './dto/user.entity';

import { GetUsersDto } from './dto/get-users.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ){}

    getAllUsers(getUsersDto: GetUsersDto): Promise<User[]>{
        return this.userRepository.find(getUsersDto);
       
    }

    async getUserById(id: string): Promise<User>{
        const userId = await this.userRepository.findOne(id);
        console.log(userId);
        return userId;
    }

    createUser(createUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.createUser(createUserDto);
    }
}
