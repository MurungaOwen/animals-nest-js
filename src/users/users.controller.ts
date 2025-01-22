import { Controller, Post, Get, Req, Body, BadRequestException, Res, Delete, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { hashPassword } from './hash.util';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get()
    getAll() {
        return this.userService.allUsers();
    }

    @Post('/create')
    async createUser(@Body() userData: UserDto) {
        let {password, ...otherData} = userData;
        if(password.length > 3){
            password = await hashPassword(password);
            const newData = {password, ...otherData};
            return await this.userService.createUser(newData);
        } else{
            console.log("password is too short");
        }
        
    }

    @Delete('/delete/:id')
    async removeUser(@Param('id') id: string) {
        return await this.userService.deleteUser(id);
    }

    @Patch('/update/:id')
    async update(@Param('id') id: string, @Body() userData: UserDto) {
        return await this.userService.updateUser(id, userData);
    }
}
