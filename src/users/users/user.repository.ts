import { EntityRepository, Repository } from "typeorm";
import { GetUsersDto } from "../dto/get-users.dto";
import { User } from "../dto/user.entity";
import { UsersService } from "./users.service";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async getAllUsers(getUsersDto: GetUsersDto) {
        // const { firstName,tasksAssigned } = getUsersDto;

        // const query = this.createQueryBuilder('user');

        return 'Hello new user';


    }


}


