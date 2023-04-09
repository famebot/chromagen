# HSL Gen

HSL Gen (`hsl-gen`) generates HSL color schemes.

- [Demo](https://hsl-gen.netlify.app)
- [HSL Gen on GitHub](https://github.com/famebot/hsl-gen)
- [@famebot/hsl-gen on npm](https://www.npmjs.com/package/@famebot/hsl-gen)

[![npm Version](https://img.shields.io/npm/v/@famebot/hsl-gen.svg?style=for-the-badge)](https://www.npmjs.com/package/@famebot/hsl-gen) &nbsp; [![GitHub issues](https://img.shields.io/github/issues/famebot/hsl-gen.svg?style=for-the-badge)](https://github.com/famebot/hsl-gen/issues)

## Installation and Usage

HSL Gen uses [Microbundle](https://github.com/developit/microbundle) to produce ESM ([ECMAScript modules](https://nodejs.org/api/esm.html)), CJS ([CommonJS](https://nodejs.org/api/modules.html)), and UMD ([Universal Module Definition](https://github.com/umdjs/umd)) bundles that work in various environments.

### Node.js and similar environments

```bash
npm i @famebot/hsl-gen
```

```js
import hslGen from '@famebot/hsl-gen';
const colorScheme = hslGen();
console.log(colorScheme);
```

CommonJS `require` syntax:

```js
const hslGen = require('@famebot/hsl-gen');
const colorScheme = hslGen();
console.log(colorScheme);
```

### Browser use client-side

For browser use, include `dist/hsl-gen.umd.js` or use [unpkg](https://unpkg.com), which `examples/browser-umd/index.html` demonstrates. View the latest version at <https://hsl-gen.netlify.app>

Latest UMD bundle on unpkg:  
<https://unpkg.com/@famebot/hsl-gen/dist/hsl-gen.umd.js>

Using the UMD bundle in the browser:

```html
<script src="https://unpkg.com/@famebot/hsl-gen/dist/hsl-gen.umd.js"></script>
<script>
    const colorScheme = hslGen();
    console.log(colorScheme);
</script>
```

### Step by step

Any method above will return an object where the variable values below are randomized within acceptable parameters:

```js
{
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
}
```

We first seed the primary color: `hue` and `darkhue` for dark mode schemes. Next we set `complement` (secondary) and `analogous` (tertiary) values, then `saturation` and `lightness` and `darkness` within acceptable parameters for light and dark text, along with companion `lighter` and `darker` values. Finally we create `xlight`, `midrange`, and `lowmid` give us more mixing options. An example generated scheme looks like:

```js
{
    hue: 285,
    complement: 105,
    analogous: 151,
    saturation: 88,
    xlight: 91,
    lighter: 84,
    lightness: 66,
    midrange: 49,
    lowmid: 35,
    darkness: 5,
    darker: 16,
    huehsl: 'hsl(285, 88%, 66%)',
    huehsllighter: 'hsl(285, 88%, 84%)',
    huehslxlight: 'hsl(285, 88%, 91%)',
    darkhuehsl: 'hsl(285, 88%, 5%)',
    darkhuehsldarker: 'hsl(285, 88%, 16%)',
    darkhuehsllowmid: 'hsl(285, 88%, 35%)',
    comphsl: 'hsl(105, 88%, 66%)',
    comphslmid: 'hsl(105, 88%, 49%)',
    comphsldark: 'hsl(105, 88%, 5%)',
    comphsldarker: 'hsl(105, 88%, 16%)',
    analhsl: 'hsl(151, 88%, 66%)',
    analhslmid: 'hsl(151, 88%, 49%)',
    analhsldark: 'hsl(151, 88%, 5%)',
    analhsldarker: 'hsl(151, 88%, 16%)'
}
```

Check `src/index.js` for the nitty gritty.

## License

MIT
