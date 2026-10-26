import { colorScheme, getRandomIntInclusive } from '../src/chromagen.js';
const colorScheme1 = colorScheme();
console.log('\nYour lucky color scheme is:\n');
console.log(colorScheme1);
console.log('\nYour lucky number is ' + getRandomIntInclusive(1, 69) + '!')
