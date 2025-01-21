import { Inject, Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { petProvider } from './dto/pet.provider';
import { PET_REPOSITORY } from 'src/constants';
import { Pet } from './dto/pet.entity';
import { petDto } from './dto/pet.dto';
import { validate } from 'class-validator';
import { User } from 'src/users/user.entity';

@Injectable()
export class PetService {
    constructor(@Inject(PET_REPOSITORY) private readonly petRepository: typeof Pet){}

    async addPet(petDetails: petDto): Promise<Pet | null> {
        try {
            const errors = await validate(petDetails);
            if (errors.length > 0) {
                throw new InternalServerErrorException('Validation failed');
            }
            const user = await User.findOne({where: {
                user_name: petDetails.owner_name
            }});
            if (!user) {
                throw new NotFoundException(`User with details ${petDetails.owner_name} not found.`);
            }
            const { owner_name, ...petData } = petDetails;
            const updatedDetails = {...petData, ownerId: user.id}
            return await this.petRepository.create<Pet>(updatedDetails);
        } catch (error) {
            return null;
        }

    }

    async findPet(petDetails: petDto): Promise<Pet | null> {
        try {
            const result = await this.petRepository.findOne({
                where: {...petDetails},
                include: {all: true},
            })
            return result
        } catch (error) {
            console.log("Error occurrred: ", error)
            return null;
        }
        
    }

    // async updatePetInfo(petDetails: petDto): Promise<Pet>{
        
    // }
    
}
