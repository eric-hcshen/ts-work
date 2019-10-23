import Pet, { IPet } from '../model/pet.model';
import { IUser } from '../model/user.model';

interface ICreatePetInput {
  owner: IUser['_id'];
  name: IPet['name'];
}

async function CreatePet({ owner, name }: ICreatePetInput): Promise<IPet> {
  return await Pet.create({
    owner,
    name
  })
    .then((data: IPet) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  CreatePet
};
