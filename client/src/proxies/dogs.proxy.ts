import type { AxiosResponse } from 'axios';

import { Dog } from '@/utils';
import BaseProxy from './proxy';

type FetchDogByIdProps = { id?: string; path?: string };
type CreateDogProps = { dogData: Dog };
type UploadDogImageProps = { image: string; id: string };
type UpdateDogProps = { dogData: Dog; id: string };
type GetFilteredDogsListProps = { queryFilters?: object };

export default class DogDataProxy extends BaseProxy {
    async getDogByID({ id }: FetchDogByIdProps): Promise<Dog> {
        const dog: Dog = await super.getDataById({ id });
        return dog;
    }

    async getFilteredDogsList({
        queryFilters,
    }: GetFilteredDogsListProps): Promise<Dog[]> {
        const validQueryFilters: Record<string, any> = {};

        Object.entries(queryFilters).forEach(([filter, value]) => {
            const isFilterValid: boolean = ![undefined, null, ''].includes(
                value
            );
            if (isFilterValid) validQueryFilters[filter] = value;
        });

        const filteredDogsList: Dog[] = await super.getData({
            params: validQueryFilters,
        });
        return filteredDogsList;
    }

    async getRacesList(): Promise<string[]> {
        const path: string = 'races';
        const racesList: string[] = await super.getData({ path });
        return racesList;
    }

    async createDog({ dogData }: CreateDogProps): Promise<Dog> {
        const dog: Dog = await super.post({ data: dogData });
        return dog;
    }

    async uploadDogImage({
        image,
        id,
    }: UploadDogImageProps): Promise<AxiosResponse> {
        const path: string = 'profile';
        const response: AxiosResponse = await super.postImageFile({
            data: image,
            id,
            path,
        });
        return response;
    }

    async updateDog({ dogData, id }: UpdateDogProps): Promise<Dog> {
        const dog: Dog = await super.put({ data: dogData, id });
        return dog;
    }

    async deleteDog({ id }: FetchDogByIdProps): Promise<Dog> {
        const dog: Dog = await super.delete({ id });
        return dog;
    }
}