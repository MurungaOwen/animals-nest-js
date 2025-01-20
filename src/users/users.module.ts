import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userProvider } from './user.provider';

@Module({
  providers: [UsersService, ...userProvider],
})
export class UsersModule {}
