import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const getRandomName = uniqueRandomArray(starWarsNames);

export const all = starWarsNames;
export const random = (number) => {
    if (number === undefined) {
        return getRandomName();
    } else if (typeof number === 'number') {
        const items = [];
        for (let i = 0; i < number; i++) {
            items.push(getRandomName());
        }
        return items;
    }
};