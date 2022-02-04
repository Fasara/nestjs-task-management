import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './dto/user.entity';
import { GetUsersDto } from './dto/get-users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
    ){}

    getAllUsers(getUsersDto: GetUsersDto){
        return this.userRepository.getAllUsers(getUsersDto);
    }
}
