import hslGen from '../src/index.js';
import assert from 'assert';

const colorScheme = hslGen();
console.log(colorScheme);

describe('HSL Gen', () => {
	it('should return a color scheme object with 22 properties', () => {
		assert.equal(Object.keys(colorScheme).length, 22);
	});
});
