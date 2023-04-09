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

We first seed the primary color, `hue` and `darkhue` for dark mode schemes. Next we set `complement` (secondary) and `analogous` (tertiary) values, then `saturation` and `lightness` and `darkness` within acceptable parameters for light and dark text, along with companion `lighter` and `darker` values. An example generated scheme looks like:

```js
{
    hue: 33,
    complement: 212,
    analogous: 258,
    saturation: 87,
    lightness: 64,
    darkness: 15,
    darker: 0,
    lighter: 84,
    analhsl: 'hsl(258, 87%, 64%)',
    analhsldarker: 'hsl(258, 87%, 48%)',
    analhsltext: 'hsl(258, 87%, 0%)',
    comphsl: 'hsl(212, 87%, 64%)',
    comphsldarker: 'hsl(212, 87%, 48%)',
    comphsltext: 'hsl(212, 87%, 0%)',
    huehsl: 'hsl(33, 87%, 64%)',
    huehsllighter: 'hsl(33, 87%, 84%)',
    huehslactive: 'hsl(33, 64%, 92%)',
    huehslhover: 'hsl(33, 64%, 84%)',
    huehslmuted: 'hsl(33, 64%, 84%)',
    darkhuehsl: 'hsl(33, 87%, 15%)',
    darkhuehsldarker: 'hsl(33, 87%, 0%)',
    darkhuehslactive: 'hsl(33, 64%, 36%)',
    darkhuehslhover: 'hsl(33, 64%, 28%)',
    darkhuehslmuted: 'hsl(33, 64%, 0%)'
}
```

Check `src/index.js` for the nitty gritty.

## License

MIT
