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

	// Seed random saturation and lightness within acceptable parameters for light and dark text.
	const saturation = getRandomIntInclusive(80, 100);
	// very light or white text
	const lightness = getRandomIntInclusive(64, 80);
	// very dark or black text
	const darkness = getRandomIntInclusive(0, 24);
	
	// typically a more extreme darkness/lightness unless the value is already
	// extreme then a moderate value to contrast well with the extreme value
	let darker = darkness < 8 ? 16 : 0;
	let lighter = lightness > 76 ? 68 : 84;

	// Create other mixing values

	// dark highlight
	const lowmid = getRandomIntInclusive(28, 36);
	// mid value used for lightness and saturation
	const midrange = getRandomIntInclusive(48, 64);
	// highlight
	const xlight = getRandomIntInclusive(84, 92);

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
		// primary hue: light and dark
		huehsl: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
		huehsllighter: `hsl(${hue}, ${saturation}%, ${lighter}%)`,
		huehslxlight: `hsl(${hue}, ${saturation}%, ${xlight}%)`,
		darkhuehsl: `hsl(${hue}, ${saturation}%, ${darkness}%)`,
		darkhuehsldarker: `hsl(${hue}, ${saturation}%, ${darker}%)`,
		darkhuehsllowmid: `hsl(${hue}, ${saturation}%, ${lowmid}%)`,
		// complement
		comphsl: `hsl(${complement}, ${saturation}%, ${lightness}%)`,
		comphslmid: `hsl(${complement}, ${saturation}%, ${midrange}%)`,
		comphsldark: `hsl(${complement}, ${saturation}%, ${darkness}%)`,
		comphsldarker: `hsl(${complement}, ${saturation}%, ${darker}%)`,
		// analogous
		analhsl: `hsl(${analogous}, ${saturation}%, ${lightness}%)`,
		analhslmid: `hsl(${analogous}, ${saturation}%, ${midrange}%)`,
		analhsldark: `hsl(${analogous}, ${saturation}%, ${darkness}%)`,
		analhsldarker: `hsl(${analogous}, ${saturation}%, ${darker}%)`
	};
};
