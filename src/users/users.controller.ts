import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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

    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto);
    }
}
