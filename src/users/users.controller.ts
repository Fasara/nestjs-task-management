import { Controller, Get, Query } from '@nestjs/common';
import { GetUsersDto } from './dto/get-users.dto';
import { User } from './dto/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    getUsers(@Query() getUsersDto: GetUsersDto){
        console.log(getUsersDto)
        return this.usersService.getAllUsers(getUsersDto);
    }
}
