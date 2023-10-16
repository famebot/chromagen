// Returns a random integer between min (included) and max (included)
// Math.floor because Math.round() yields non-uniform distribution
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default () => {
    // Seed the primary color
    const hue = getRandomIntInclusive(1, 359);
    // Comment out above line and uncomment below to test specific values
    // var hue = 9; // 128 173 (test values)

    // Set complement (secondary) and empty analogous (tertiary) values
    var complement = hue > 180 ? hue - 180 : hue + 179;

    var analogous;
    switch (hue) {
        case hue < 135:
            analogous = hue + 224;
            break;
        case hue > 224:
            analogous = hue - 223;
            break;
        default:
            var shift = hue + 225;
            analogous = shift > 359 ? shift - 359 : shift;
    }

    // Seed random saturation and lightness values within acceptable parameters
    const saturation = getRandomIntInclusive(80, 100);
    // very light or white text
    const lightness = getRandomIntInclusive(64, 80);
    // very dark or black text
    const darkness = getRandomIntInclusive(0, 24);
    // mid value used for lightness and saturation
    const midrange = getRandomIntInclusive(48, 64);
    // highlight
    const xlight = getRandomIntInclusive(84, 92);
    // dark highlight
    const lowmid = getRandomIntInclusive(28, 36);

    // Derive other mixing values
    // typically a more extreme lightness/darkness unless the value is already
    // extreme then a moderate value to contrast well with the extreme value
    let lighter = lightness > 76 ? 68 : 84;
    let darker = darkness < 8 ? 16 : 0;

    return {
        // raw mixing values
        hue: hue,
        complement: complement,
        analogous: analogous,
        saturation: saturation,
        xlight: xlight,
        lighter: lighter,
        lightness: lightness,
        midrange: midrange,
        lowmid: lowmid,
        darkness: darkness,
        darker: darker,
        // colors
        huehsl: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        complementhsl: `hsl(${complement}, ${saturation}%, ${lightness}%)`,
        analogoushsl: `hsl(${analogous}, ${saturation}%, ${lightness}%)`,
        // hue variations by lightness
        huehslxlight: `hsl(${hue}, ${saturation}%, ${xlight}%)`,
        huehsllighter: `hsl(${hue}, ${saturation}%, ${lighter}%)`,
        huehslmid: `hsl(${hue}, ${saturation}%, ${midrange}%)`,
        huehsllowmid: `hsl(${hue}, ${saturation}%, ${lowmid}%)`,
        huehsldark: `hsl(${hue}, ${saturation}%, ${darkness}%)`,
        huehsldarker: `hsl(${hue}, ${saturation}%, ${darker}%)`,
        // complement variations by lightness
        complementhslxlight: `hsl(${complement}, ${saturation}%, ${xlight}%)`,
        complementhsllighter: `hsl(${complement}, ${saturation}%, ${lighter}%)`,
        complementhslmid: `hsl(${complement}, ${saturation}%, ${midrange}%)`,
        complementhsllowmid: `hsl(${complement}, ${saturation}%, ${lowmid}%)`,
        complementhsldark: `hsl(${complement}, ${saturation}%, ${darkness}%)`,
        complementhsldarker: `hsl(${complement}, ${saturation}%, ${darker}%)`,
        // analogous variations by lightness
        analogoushslxlight: `hsl(${analogous}, ${saturation}%, ${xlight}%)`,
        analogoushsllighter: `hsl(${analogous}, ${saturation}%, ${lighter}%)`,
        analogoushslmid: `hsl(${analogous}, ${saturation}%, ${midrange}%)`,
        analogoushsllowmid: `hsl(${analogous}, ${saturation}%, ${lowmid}%)`,
        analogoushsldark: `hsl(${analogous}, ${saturation}%, ${darkness}%)`,
        analogoushsldarker: `hsl(${analogous}, ${saturation}%, ${darker}%)`
    };
};
