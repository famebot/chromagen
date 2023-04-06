# HSL Gen

HSL Gen (`hsl-gen`) generates HSL color schemes.

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
    hue: hue,
    complement: complement,
    analogous: analogous,
    saturation: saturation,
    lightness: lightness,
    darkness: darkness,
    darker: darker,
    lighter: lighter,
    analhsl: `hsl(${analogous}, ${saturation}%, ${lightness}%)`,
    analhsldarker: `hsl(${analogous}, ${saturation}%, 48%)`,
    analhsltext: `hsl(${analogous}, ${saturation}%, ${darkness}%)`,
    comphsl: `hsl(${complement}, ${saturation}%, ${lightness}%)`,
    comphsldarker: `hsl(${complement}, ${saturation}%, 48%)`,
    comphsltext: `hsl(${complement}, ${saturation}%, ${darkness}%)`,
    huehsl: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    huehsllighter: `hsl(${hue}, ${saturation}%, ${lighter}%)`,
    huehslactive: `hsl(${hue}, 64%, 92%)`,
    huehslhover: `hsl(${hue}, 64%, 84%)`,
    huehslmuted: `hsl(${hue}, 64%, ${lighter}%)`,
    darkhuehsl: `hsl(${hue}, ${saturation}%, ${darkness}%)`,
    darkhuehsldarker: `hsl(${hue}, ${saturation}%, ${darker}%)`,
    darkhuehslactive: `hsl(${hue}, 64%, 36%)`,
    darkhuehslhover: `hsl(${hue}, 64%, 28%)`,
    darkhuehslmuted: `hsl(${hue}, 64%, ${darker}%)`
}
```

We first seed the primary color, `hue` and `darkhue` for dark mode schemes. Next we set `complement` (secondary) and `analogous` (tertiary) values, then `saturation` and `lightness` and `darkness` within acceptable parameters for light and dark text, along with companion `lighter` and `darker` values. An example generated scheme looks like:

```js
{
    hue: 144,
    complement: 323,
    analogous: 10,
    saturation: 99,
    lightness: 77,
    darkness: 4,
    darker: 16,
    lighter: 68,
    analhsl: 'hsl(10, 99%, 77%)',
    analhsldarker: 'hsl(10, 99%, 48%)',
    analhsltext: `hsl(10, 99%, 4%)`,
    comphsl: 'hsl(323, 99%, 77%)',
    comphsldarker: 'hsl(323, 99%, 48%)',
    comphsltext: `hsl(323, 99%, 4%)`,
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
