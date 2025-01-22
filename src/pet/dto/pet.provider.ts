import { PET_REPOSITORY } from "../../constants";
import {Pet} from "../pet.entity";

export const petProvider = [{
    provide: PET_REPOSITORY,
    useValue: Pet
}]