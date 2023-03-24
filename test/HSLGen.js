import HSLgen from '../src/index.js';
import assert from 'assert';

const colorScheme = HSLgen();
console.log(colorScheme);

describe('HSL Gen', () => {
	it('should generate a color scheme', () => {
		assert.equal(Object.keys(colorScheme).length, 14);
	});
});
