import hslGen from '../src/index.js';
import assert from 'assert';

const propCount = 24;
const colorScheme = hslGen();
console.log(colorScheme);

describe('HSL Gen', () => {
	it(`should return a color scheme object with ${propCount} properties`, () => {
		assert.equal(Object.keys(colorScheme).length, propCount);
	});
});
