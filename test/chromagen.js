import chromagen from '../src/index.js';
import assert from 'assert';

const propCount = 11;
const colorScheme = chromagen();
console.log(colorScheme);

const satInt = parseInt(colorScheme.saturation.slice(0, -1));

describe('Chromagen', () => {
    it(`${propCount} property color scheme object`, () => {
        assert.equal(Object.keys(colorScheme).length, propCount);
    });

    it(`hue greater than 0 and less than 360`, () => {
        assert.equal(
            colorScheme.hue > 0 && colorScheme.hue < 360,
            true
        );
    });

    it(`complement hue greater than 0 and less than 360`, () => {
        assert.equal(
            colorScheme.complement > 0 && colorScheme.complement < 360,
            true
        );
    });

    it(`analogous hue greater than 0 and less than 360`, () => {
        assert.equal(
            colorScheme.analogous > 0 && colorScheme.analogous < 360,
            true
        );
    });

    it(`saturation greater than 79 and less than 101`, () => {
        assert.equal(
            parseInt(colorScheme.saturation.slice(0, -1)) > 79 && parseInt(colorScheme.saturation.slice(0, -1)) < 101,
            true
        );
    });

    it(`xlight greater than 83 and less than 93`, () => {
        assert.equal(parseInt(colorScheme.xlight.slice(0, -1)) > 83 && parseInt(colorScheme.xlight.slice(0, -1)) < 93, true);
    });

    it(`lighter greater than 75 and less than 85`, () => {
        assert.equal(
            parseInt(colorScheme.lighter.slice(0, -1)) > 75 && parseInt(colorScheme.lighter.slice(0, -1)) < 85,
            true
        );
    });

    it(`lightness greater than 63 and less than 73`, () => {
        assert.equal(
            parseInt(colorScheme.lightness.slice(0, -1)) > 63 && parseInt(colorScheme.lightness.slice(0, -1)) < 73,
            true
        );
    });

    it(`midrange greater than 47 and less than 65`, () => {
        assert.equal(
            parseInt(colorScheme.midrange.slice(0, -1)) > 47 && parseInt(colorScheme.midrange.slice(0, -1)) < 65,
            true
        );
    });

    it(`lowmid greater than 27 and less than 37`, () => {
        assert.equal(parseInt(colorScheme.lowmid.slice(0, -1)) > 27 && parseInt(colorScheme.lowmid.slice(0, -1)) < 37, true);
    });

    it(`darkness greater than 15 and less than 25`, () => {
        assert.equal(
            parseInt(colorScheme.darkness.slice(0, -1)) > 15 && parseInt(colorScheme.darkness.slice(0, -1)) < 25,
            true
        );
    });

    it(`darker greater than -1 and less than 13`, () => {
        assert.equal(
            parseInt(colorScheme.darker.slice(0, -1)) > -1 && parseInt(colorScheme.darker.slice(0, -1)) < 13, 
            true
        );
    });
});
