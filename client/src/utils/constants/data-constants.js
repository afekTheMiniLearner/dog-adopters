import DOGS_BREEDS_LIST from '@data/DOGS_BREEDS_LIST.json';
import DOGS_CHARACTERISTICS_LIST from '@data/DOGS_CHARACTERISTICS_LIST.json';

export const APP_PATHS = {
    CREATE_DOG: '/dogs/new',
    DOGS_DATA: '/dogs',
    LOGIN: '/login',
    REGISTER: '/register',
    USERS: '/users',
};

export const { DOGS_CHARACTERISTICS } = DOGS_CHARACTERISTICS_LIST;

export const { DOGS_BREEDS } = DOGS_BREEDS_LIST;

export const DOG_MAX_CHARACTERISTICS = 4;

export const MIN_DOG_AGE = 0;
export const MAX_DOG_AGE = 20;

export const ALLOWED_IMAGE_FORMATS = ['png', 'jpg', 'jpeg'];

// ['image/png', 'image/jpg', 'image/jpeg']
export const FILE_IMAGE_TYPES = ALLOWED_IMAGE_FORMATS.map((t) => `image/${t}`);

export const DOGS_LIST_DEFAULT_FILTRATION = {
    gender: '',
    maxAge: MAX_DOG_AGE,
    minAge: MIN_DOG_AGE,
    name: '',
    race: '',
    status: '',
};

export const PAGES_BACKGROUNDS = {
    EDIT_DOG: '/hearts-bg.png',
    CREATE_DOG: '/hearts-bg.png',
    DOGS_DATA: '/hearts-bg.png',
    LOGIN: '/dogs-run-bg.jpg',
    REGISTER: '/dogs-run-bg.jpg',
};
