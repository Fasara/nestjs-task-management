import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dtos/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

export class UsersRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('salt', salt);
    console.log('hash', hashedPassword);

    const user = this.create({ username, password: hashedPassword });
    // wip - needs {unique: true} to work in the entity first
    try {
      await this.save(user);
    } catch (error) {
      console.log(error.code);
    }
  }
}
