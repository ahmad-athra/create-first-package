const uniqueRandomArray = require('unique-random-array');
const starWarsNames = require('./starwars-names.json');
const getRandomName = uniqueRandomArray(starWarsNames)
module.exports = {
    all: starWarsNames,
    random: random
}


function random(number) {
    if (number === undefined) {
        return getRandomName()
    } else if (typeof number === 'number') {
        const items = []
        for (let i = 0; i < number; i++) {
            items.push(getRandomName())
        }
        return items
    }
}