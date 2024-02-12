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

	// Derive complement (secondary) hue
	var complement = hue > 180 ? hue - 180 : hue + 179;

	// analogous (tertiary) hue
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
	// highlight
	const xlight = getRandomIntInclusive(84, 92);
	// more extreme lightness
	const lighter = getRandomIntInclusive(76, 84);
	// very light or white text
	const lightness = getRandomIntInclusive(64, 72);
	// mid value used for lightness and saturation
	const midrange = getRandomIntInclusive(48, 64);
	// dark highlight
	const lowmid = getRandomIntInclusive(28, 36);
	// very dark or black text
	const darkness = getRandomIntInclusive(16, 24);
	// more extreme darkness
	const darker = getRandomIntInclusive(0, 12);

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
		// primary hue variations by lightness
		huexlighthsl: `hsl(${hue}, ${saturation}%, ${xlight}%)`,
		huelighterhsl: `hsl(${hue}, ${saturation}%, ${lighter}%)`,
		huemidhsl: `hsl(${hue}, ${saturation}%, ${midrange}%)`,
		huelowmidhsl: `hsl(${hue}, ${saturation}%, ${lowmid}%)`,
		huedarkhsl: `hsl(${hue}, ${saturation}%, ${darkness}%)`,
		huedarkerhsl: `hsl(${hue}, ${saturation}%, ${darker}%)`,
		// complement variations by lightness
		complementxlighthsl: `hsl(${complement}, ${saturation}%, ${xlight}%)`,
		complementlighterhsl: `hsl(${complement}, ${saturation}%, ${lighter}%)`,
		complementmidhsl: `hsl(${complement}, ${saturation}%, ${midrange}%)`,
		complementlowmidhsl: `hsl(${complement}, ${saturation}%, ${lowmid}%)`,
		complementdarkhsl: `hsl(${complement}, ${saturation}%, ${darkness}%)`,
		complementdarkerhsl: `hsl(${complement}, ${saturation}%, ${darker}%)`,
		// analogous variations by lightness
		analogousxlighthsl: `hsl(${analogous}, ${saturation}%, ${xlight}%)`,
		analogouslighterhsl: `hsl(${analogous}, ${saturation}%, ${lighter}%)`,
		analogousmidhsl: `hsl(${analogous}, ${saturation}%, ${midrange}%)`,
		analogouslowmidhsl: `hsl(${analogous}, ${saturation}%, ${lowmid}%)`,
		analogousdarkhsl: `hsl(${analogous}, ${saturation}%, ${darkness}%)`,
		analogousdarkerhsl: `hsl(${analogous}, ${saturation}%, ${darker}%)`,
	};
};
