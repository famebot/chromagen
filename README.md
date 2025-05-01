# Chromagen

Color scheme generator

[![npm Version](https://img.shields.io/npm/v/@famebot/chromagen.svg?style=for-the-badge)](https://www.npmjs.com/package/@famebot/chromagen)
&nbsp;
[![GitHub issues](https://img.shields.io/github/issues/famebot/chromagen.svg?style=for-the-badge)](https://github.com/famebot/chromagen/issues)

- [Demo](https://chromagen.io)
- [Chromagen on GitHub](https://github.com/famebot/chromagen)
- [@famebot/chromagen on npm](https://www.npmjs.com/package/@famebot/chromagen)

## Installation and Usage

Chromagen uses [Microbundle](https://github.com/developit/microbundle) to
produce ESM ([ECMAScript modules](https://nodejs.org/api/esm.html)), CJS
([CommonJS](https://nodejs.org/api/modules.html)), and UMD
([Universal Module Definition](https://github.com/umdjs/umd)) bundles that work
in various environments.

### Node.js and similar environments

```bash
npm i @famebot/chromagen
```

```js
import chromagen from "@famebot/chromagen";
const colorScheme = chromagen();
console.log(colorScheme);
```

CommonJS `require` syntax:

```js
const chromagen = require("@famebot/chromagen");
const colorScheme = chromagen();
console.log(colorScheme);
```

### Browser use client-side

For browsers, use [unpkg](https://unpkg.com) or include `dist/chromagen.umd.js`,
which `examples/browser/index.html` demonstrates. View the latest version at
<https://chromagen.io>

Latest UMD bundle on unpkg:\
<https://unpkg.com/@famebot/chromagen/dist/chromagen.umd.js>

Using the UMD bundle in the browser:

```html
<script
  src="https://unpkg.com/@famebot/chromagen/dist/chromagen.umd.js"
></script>
<script>
  const colorScheme = chromagen();
  console.log(colorScheme);
</script>
```

### Step by step

Chromagen returns an 11 property HSL color scheme object with values randomized
within acceptable parameters. Included are 7 shades of lightness, 1 saturation
level, and 3 hues: the primary hue, its complement, and a hue analogous to the
complement. The generated object for the example scheme in the image above was:

```js
{
  hue: 172,
  complement: 351,
  analogous: 38,
  saturation: '94%',
  xlight: '92%',
  lighter: '83%',
  lightness: '65%',
  midrange: '54%',
  lowmid: '36%',
  darkness: '20%',
  darker: '9%'
}
```

Since [v1](https://github.com/famebot/chromagen/releases/tag/v1.0.0), Chromagen
returns the percent symbol with all mixing values except hues.

Check [`src/index.js`](./src/index.js) for the nitty gritty. We summarize
breaking changes in the [changelog](./CHANGELOG.md) and the
[release history on GitHub](https://github.com/famebot/chromagen/releases).

## License

MIT
