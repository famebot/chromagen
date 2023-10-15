import chromagen from '../src/index.js';
import assert from 'assert';

const propCount = 25;
const colorScheme = chromagen();
console.log(colorScheme);

describe('Chromagen', () => {
    it(`should return a color scheme object with ${propCount} properties`, () => {
        assert.equal(Object.keys(colorScheme).length, propCount);
    });
});
