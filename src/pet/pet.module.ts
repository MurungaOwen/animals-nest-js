import { Module } from '@nestjs/common';
import { PetService } from './pet.service';

@Module({
  providers: [PetService]
})
export class PetModule {}
