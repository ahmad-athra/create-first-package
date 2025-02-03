const starWarsNamesModule = require('./index'); // Update with actual path
const starWarsNames = require('./starwars-names.json');

describe('Star Wars Names Module', () => {
    test('should have an all property that is an array', () => {
        expect(Array.isArray(starWarsNamesModule.all)).toBe(true);
    });

    test('should have an all property that matches starWarsNames.json', () => {
        expect(starWarsNamesModule.all).toEqual(starWarsNames);
    });

    test('random should return a random name from starWarsNames', () => {
        const randomName = starWarsNamesModule.random();
        expect(starWarsNames).toContain(randomName);
    });

    test('random should return different names on multiple calls', () => {
        const name1 = starWarsNamesModule.random();
        const name2 = starWarsNamesModule.random();
        expect(name1).not.toBe(name2); // Might fail occasionally due to randomness
    });
});