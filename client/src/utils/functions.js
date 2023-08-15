import { FILE_IMAGE_TYPES } from './constants';

/* This function used for yup validations, to trim a string 
and to assure that it doesn't contain numbers/double spaces */
export const assertNameStringInput = (name) => {
    if (!name) return true;

    const endsWithSpace = name?.[0] === ' ';
    const startsWithSpace = name?.[name.length - 1] === ' ';
    const haveAdjacentSpaces = / {2,}/.test(name);
    const haveNumber = /\d/.test(name);

    if (endsWithSpace || startsWithSpace || haveAdjacentSpaces || haveNumber) {
        return false;
    }

    return true;
};

export const assertArrayOfNameStringInput = (arr) => {
    const isValidArray = arr.every((name) => {
        const isNameValid = assertNameStringInput(name);
        return isNameValid;
    });

    return isValidArray;
};

export const getUrlFromParams = ({ baseUrl, id, path } = {}) => {
    if (!baseUrl) return;

    let url;
    switch (true) {
        case !!path && !!id:
            url = `${baseUrl}/${path}/${id}`;
            break;
        case !!path:
            url = `${baseUrl}/${path}`;
            break;
        case !!id:
            url = `${baseUrl}/${id}`;
            break;
        default:
            url = baseUrl;
    }

    return url;
};

export function getCapitalLetters(str) {
    const chars =
        str
            ?.split(' ')
            .filter((v) => !!v)
            .map((word) => word[0].toUpperCase()) ?? undefined;

    if (!chars) return undefined;

    const [firstChar, secondChar] = [chars?.[0], chars?.slice(-1)];
    return chars.length > 1 ? [firstChar, secondChar] : [firstChar];
}

export const assertFileImageType = (value) => {
    const fileType = value?.replace('data:', '')?.split(';')[0];

    const isFileImageType = FILE_IMAGE_TYPES?.includes(fileType?.toLowerCase());
    return isFileImageType;
};
