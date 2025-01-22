import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../constants';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User){}

    async allUsers(): Promise<User[]>{
        // returns an array of all users
        return await this.userRepository.findAll();
    }
    async createUser(user: UserDto) : Promise<User>{
        return await this.userRepository.create<User>(user);
    }

    async findByName(username: string) : Promise<User> {
        return await this.userRepository.findOne({ where: {user_name: username} })
    }

    async deleteUser(id: string): Promise<User> {
        const instance = this.userRepository.findByPk(id);
        (await instance).deletedAt = true;
        (await instance).save()
        return instance;
    }

    async updateUser(id: string, data: {user_name: string, password?: string}): Promise<User> {
        const [affectedRows] = await this.userRepository.update(data, {
            where: { id },
            returning: true, // To return the updated record (optional)
        });
      
        if (affectedRows === 0) {
            throw new Error('User not found or no changes made');
        }
      
        return this.userRepository.findByPk(id); // Return the updated user
    }
}
