import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUsersDto } from "./dto/get-users.dto";
import { User } from "./dto/user.entity";
import { UsersService } from "./users.service";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async getAllUsers(getUsersDto: GetUsersDto) {
        // const { firstName,tasksAssigned } = getUsersDto;
        // const query = this.createQueryBuilder('user');
        return 'Hello new user';
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const { firstName, lastName } = createUserDto;

        const user = this.create({
			firstName,
			lastName,
		});

		await this.save(user);
		return user;   
    }


}


