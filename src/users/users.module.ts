import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userProvider } from './user.provider';
import { UsersController } from './users.controller';
import { PetModule } from 'src/pet/pet.module';

@Module({
  providers: [UsersService, ...userProvider],
  controllers: [UsersController],
  imports: [PetModule]
})
export class UsersModule {}
