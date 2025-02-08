import { all, random } from './index.js'; // Update with actual path
import starWarsNames from './starwars-names.json';

describe('Star Wars Names Module', () => {
    test('should have an all property that is an array', () => {
        expect(Array.isArray(all)).toBe(true);
    });

    test('should have an all property that matches starWarsNames.json', () => {
        expect(all).toEqual(starWarsNames);
    });

    test('random should return a random name from starWarsNames', () => {
        const randomName = random();
        expect(starWarsNames).toContain(randomName);
    });

    test('random should return different names on multiple calls', () => {
        const name1 = random();
        const name2 = random();
        expect(name1).not.toBe(name2); // Might fail occasionally due to randomness
    });

    test('should return an array of random items if passed a number', () => {
        const randomItems = random(3);
        expect(randomItems).toHaveLength(3);
        randomItems.forEach(name => {
            expect(starWarsNames).toContain(name);
        });
    });
});