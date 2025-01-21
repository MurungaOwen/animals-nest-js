import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../constants';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User){}

    async createUser(user: UserDto) : Promise<User>{
        return await this.userRepository.create<User>(user);
    }

    async findByName(username: string) : Promise<User> {
        return await this.userRepository.findOne({ where: {user_name: username} })
    }
}
