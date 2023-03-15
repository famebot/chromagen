import HSLGen from '../src/index.js';
import assert from 'assert';

const hslScheme = HSLGen();
console.log(hslScheme);

describe('HSL Gen', () => {
	it('should generate a color scheme', () => {
		assert.equal(Object.keys(hslScheme).length, 14);
	});
});
