import chromagen from '../src/index.js';
import assert from 'assert';

const propCount = 32;
const colorScheme = chromagen();
console.log(colorScheme);

describe('Chromagen', () => {
    it(`should return a color scheme object with ${propCount} properties`, () => {
        assert.equal(
            Object.keys(colorScheme).length, 
            propCount
        );
    });

    it(`should return a hue greater than zero and less than 360`, () => {
        assert.equal(
            colorScheme.hue > 0 && colorScheme.hue < 360,
            true
        );
    });

    it(`should return a complement hue greater than zero and less than 360`, () => {
        assert.equal(
            colorScheme.complement > 0 && colorScheme.complement < 360,
            true
        );
    });

    it(`should return a analogous hue greater than zero and less than 360`, () => {
        assert.equal(
            colorScheme.analogous > 0 && colorScheme.analogous < 360,
            true
        );
    });

    it(`should return a saturation value greater than 79 and less than 101`, () => {
        assert.equal(
            colorScheme.saturation > 79 && colorScheme.saturation < 101,
            true
        );
    });

    it(`should return a lightness value greater than 63 and less than 81`, () => {
        assert.equal(
            colorScheme.lightness > 63 && colorScheme.lightness < 81,
            true
        );
    });

    it(`should return a darkness value greater than -1 and less than 25`, () => {
        assert.equal(
            colorScheme.darkness > -1 && colorScheme.darkness < 25,
            true
        );
    });

    it(`should return a midrange value greater than 47 and less than 65`, () => {
        assert.equal(
            colorScheme.midrange > 47 && colorScheme.midrange < 65,
            true
        );
    });

    it(`should return a xlight value greater than 83 and less than 93`, () => {
        assert.equal(
            colorScheme.xlight > 83 && colorScheme.xlight < 93,
            true
        );
    });

    it(`should return a lowmid value greater than 27 and less than 37`, () => {
        assert.equal(
            colorScheme.lowmid > 27 && colorScheme.lowmid < 37,
            true
        );
    });
    
    it(`should return a lighter value of 68 or 84`, () => {
        assert.equal(
            colorScheme.lighter === 68 || colorScheme.lighter === 84,
            true
        );
    });

    it(`should return a darker value of 16 or 0`, () => {
        assert.equal(
            colorScheme.darker === 0 || colorScheme.darker === 16,
            true
        );
    });
});
