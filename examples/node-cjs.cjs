const { colorScheme, getRandomIntInclusive } = require('../dist/chromagen.cjs');
const colorScheme1 = colorScheme();
console.log('\nYour lucky color scheme is:\n');
console.log(colorScheme1);
console.log('\nYour lucky number is ' + getRandomIntInclusive(1, 69) + '!')
