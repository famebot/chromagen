# HSL Gen

HSL Gen (`hsl-gen`), generates HSL color schemes.

## Installation

HSL Gen uses [Microbundle](https://github.com/developit/microbundle) to produce ESM ([ECMAScript modules](https://nodejs.org/api/esm.html)), CJS ([CommonJS](https://nodejs.org/api/modules.html)), and UMD ([Universal Module Definition](https://github.com/umdjs/umd)) bundles that work in various environments. For Node.js, install with npm:

```bash
npm i @famebot/hsl-gen
```

We are testing the various bundle formats, for now `package.json` has the options.

## Usage

Assuming Node.js or something similar:

```js
import HSLgen from '@famebot/hsl-gen';
const colorScheme = HSLgen();
console.log(colorScheme);
```

CommonJS `require` syntax:

```js
const HSLgen = require('@famebot/hsl-gen');
const colorScheme = HSLgen();
console.log(colorScheme);
```

This will return an object where the variable values below are randomized within acceptable parameters:

```js
{
    analhsl: `hsl(${analogous}, ${saturation}%, ${lightness}%)`,
    analhsldarker: `hsl(${analogous}, ${saturation}%, 48%)`,
    comphsl: `hsl(${complement}, ${saturation}%, ${lightness}%)`,
    comphsldarker: `hsl(${complement}, ${saturation}%, 48%)`,
    huehsl: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    huehsllighter: `hsl(${hue}, ${saturation}%, ${lighter}%)`,
    huehslactive: `hsl(${hue}, 64%, 92%)`,
    huehslhover: `hsl(${hue}, 64%, 84%)`,
    huehslmuted: `hsl(${hue}, 64%, ${lighter}%)`,
    darkhuehsl: `hsl(${hue}, ${saturation}%, ${darkness}%)`,
    darkhuehsldarker: `hsl(${hue}, ${saturation}%, ${darker}%)`,
    darkhuehslactive: `hsl(${hue}, 64%, 36%)`,
    darkhuehslhover: `hsl(${hue}, 64%, 28%)`,
    darkhuehslmuted: `hsl(${hue}, 64%, ${darker}%)`,
}
```

We first seed the primary color, `hue` and `darkhue` for dark mode schemes. Next we set complement (secondary) and analogous (tertiary) values, then saturtion and lightness within acceptable parameters for light and dark text. An example generated scheme looks like:

```js
{
    analhsl: 'hsl(10, 99%, 77%)',
    analhsldarker: 'hsl(10, 99%, 48%)',
    comphsl: 'hsl(323, 99%, 77%)',
    comphsldarker: 'hsl(323, 99%, 48%)',
    huehsl: 'hsl(144, 99%, 77%)',
    huehsllighter: 'hsl(144, 99%, 68%)',
    huehslactive: 'hsl(144, 64%, 92%)',
    huehslhover: 'hsl(144, 64%, 84%)',
    huehslmuted: 'hsl(144, 64%, 68%)',
    darkhuehsl: 'hsl(144, 99%, 4%)',
    darkhuehsldarker: 'hsl(144, 99%, 16%)',
    darkhuehslactive: 'hsl(144, 64%, 36%)',
    darkhuehslhover: 'hsl(144, 64%, 28%)',
    darkhuehslmuted: 'hsl(144, 64%, 16%)'
}
```

Check `src/index.js` for the nitty gritty.

## License

MIT
