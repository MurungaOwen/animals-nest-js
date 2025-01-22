import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import {petProvider} from './dto/pet.provider'

@Module({
  providers: [PetService, ...petProvider],
  exports: ['PET_REPOSITORY']
})
export class PetModule {}
