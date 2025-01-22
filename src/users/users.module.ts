import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userProvider } from './user.provider';
import { UsersController } from './users.controller';
import {Pet} from "../pet/pet.entity";
@Module({
  providers: [UsersService, ...userProvider],
  controllers: [UsersController],
  imports: [Pet]
})
export class UsersModule {}
