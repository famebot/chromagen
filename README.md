# Chromagen

Chromagen generates HSL color schemes.

- [Demo](https://chromagen.io)
- [Chromagen on GitHub](https://github.com/famebot/chromagen)
- [@famebot/chromagen on npm](https://www.npmjs.com/package/@famebot/chromagen)

[![npm Version](https://img.shields.io/npm/v/@famebot/chromagen.svg?style=for-the-badge)](https://www.npmjs.com/package/@famebot/chromagen) &nbsp; [![GitHub issues](https://img.shields.io/github/issues/famebot/chromagen.svg?style=for-the-badge)](https://github.com/famebot/chromagen/issues)

## Installation and Usage

Chromagen uses [Microbundle](https://github.com/developit/microbundle) to produce ESM ([ECMAScript modules](https://nodejs.org/api/esm.html)), CJS ([CommonJS](https://nodejs.org/api/modules.html)), and UMD ([Universal Module Definition](https://github.com/umdjs/umd)) bundles that work in various environments.

### Node.js and similar environments

```bash
npm i @famebot/chromagen
```

```js
import chromagen from '@famebot/chromagen';
const colorScheme = chromagen();
console.log(colorScheme);
```

CommonJS `require` syntax:

```js
const chromagen = require('@famebot/chromagen');
const colorScheme = chromagen();
console.log(colorScheme);
```

### Browser use client-side

For browser use, include `dist/chromagen.umd.js` or use [unpkg](https://unpkg.com), which `examples/browser-umd/index.html` demonstrates. View the latest version at <https://chromagen.io>

Latest UMD bundle on unpkg:  
<https://unpkg.com/@famebot/chromagen/dist/chromagen.umd.js>

Using the UMD bundle in the browser:

```html
<script src="https://unpkg.com/@famebot/chromagen/dist/chromagen.umd.js"></script>
<script>
    const colorScheme = chromagen();
    console.log(colorScheme);
</script>
```

### Step by step

Any method above will return an object where the variable values below are randomized within acceptable parameters:

```js
{
  hue: 128,
  complement: 307,
  analogous: 353,
  saturation: 97,
  xlight: 89,
  lighter: 68,
  lightness: 77,
  midrange: 52,
  lowmid: 28,
  darkness: 2,
  darker: 16,
  huehsl: 'hsl(128, 97%, 77%)',
  complementhsl: 'hsl(307, 97%, 77%)',
  analogoushsl: 'hsl(353, 97%, 77%)',
  huehslxlight: 'hsl(128, 97%, 89%)',
  huehsllighter: 'hsl(128, 97%, 68%)',
  huehslmid: 'hsl(128, 97%, 52%)',
  huehsllowmid: 'hsl(128, 97%, 28%)',
  huehsldark: 'hsl(128, 97%, 2%)',
  huehsldarker: 'hsl(128, 97%, 16%)',
  complementhslxlight: 'hsl(307, 97%, 89%)',
  complementhsllighter: 'hsl(307, 97%, 68%)',
  complementhslmid: 'hsl(307, 97%, 52%)',
  complementhsllowmid: 'hsl(307, 97%, 28%)',
  complementhsldark: 'hsl(307, 97%, 2%)',
  complementhsldarker: 'hsl(307, 97%, 16%)',
  analogoushslxlight: 'hsl(353, 97%, 89%)',
  analogoushsllighter: 'hsl(353, 97%, 68%)',
  analogoushslmid: 'hsl(353, 97%, 52%)',
  analogoushsllowmid: 'hsl(353, 97%, 28%)',
  analogoushsldark: 'hsl(353, 97%, 2%)',
  analogoushsldarker: 'hsl(353, 97%, 16%)'
}
```

Check `src/index.js` for the nitty gritty.

## License

MIT
