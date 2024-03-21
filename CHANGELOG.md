# [1.0.0](https://github.com/famebot/chromagen/compare/v0.9.0...v1.0.0) (2024-03-19)


* feat!: simplify api, update example ([38c8403](https://github.com/famebot/chromagen/commit/38c840386ada2123066328525e6e69150be6aa93))


### BREAKING CHANGES

* remove pre-mixed values in returned object

  ```diff
  --- a/src/index.js
  +++ b/src/index.js
  -      // colors
  -     huehsl: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
  -     complementhsl: `hsl(${complement}, ${saturation}%, ${lightness}%)`,
  -     analogoushsl: `hsl(${analogous}, ${saturation}%, ${lightness}%)`,
  -     // primary hue variations by lightness
  -     huexlighthsl: `hsl(${hue}, ${saturation}%, ${xlight}%)`,
  -     huelighterhsl: `hsl(${hue}, ${saturation}%, ${lighter}%)`,
  -     huemidhsl: `hsl(${hue}, ${saturation}%, ${midrange}%)`,
  -     huelowmidhsl: `hsl(${hue}, ${saturation}%, ${lowmid}%)`,
  -     huedarkhsl: `hsl(${hue}, ${saturation}%, ${darkness}%)`,
  -     huedarkerhsl: `hsl(${hue}, ${saturation}%, ${darker}%)`,
  -     // complement variations by lightness
  -     complementxlighthsl: `hsl(${complement}, ${saturation}%, ${xlight}%)`,
  -     complementlighterhsl: `hsl(${complement}, ${saturation}%, ${lighter}%)`,
  -     complementmidhsl: `hsl(${complement}, ${saturation}%, ${midrange}%)`,
  -     complementlowmidhsl: `hsl(${complement}, ${saturation}%, ${lowmid}%)`,
  -     complementdarkhsl: `hsl(${complement}, ${saturation}%, ${darkness}%)`,
  -     complementdarkerhsl: `hsl(${complement}, ${saturation}%, ${darker}%)`,
  -     // analogous variations by lightness
  -     analogousxlighthsl: `hsl(${analogous}, ${saturation}%, ${xlight}%)`,
  -     analogouslighterhsl: `hsl(${analogous}, ${saturation}%, ${lighter}%)`,
  -     analogousmidhsl: `hsl(${analogous}, ${saturation}%, ${midrange}%)`,
  -     analogouslowmidhsl: `hsl(${analogous}, ${saturation}%, ${lowmid}%)`,
  -     analogousdarkhsl: `hsl(${analogous}, ${saturation}%, ${darkness}%)`,
  -     analogousdarkerhsl: `hsl(${analogous}, ${saturation}%, ${darker}%)`,
  ```

* non-color mixing values now returned with percent included
	
  ```diff
  --- a/src/index.js
  +++ b/src/index.js
        Seed random saturation and lightness values within acceptable parameters
  -     const saturation = getRandomIntInclusive(80, 100);
  +     const saturation = `${getRandomIntInclusive(80, 100)}%`;
        // highlight
  -     const xlight = getRandomIntInclusive(84, 92);
  +     const xlight = `${getRandomIntInclusive(84, 92)}%`;
        // more extreme lightness
  -     const lighter = getRandomIntInclusive(76, 84);
  +     const lighter = `${getRandomIntInclusive(76, 84)}%`;
        // very light or white text
  -     const lightness = getRandomIntInclusive(64, 72);
  +     const lightness = `${getRandomIntInclusive(64, 72)}%`;
        // mid value used for lightness and saturation
  -     const midrange = getRandomIntInclusive(48, 64);
  +     const midrange = `${getRandomIntInclusive(48, 64)}%`;
        // dark highlight
  -     const lowmid = getRandomIntInclusive(28, 36);
  +     const lowmid = `${getRandomIntInclusive(28, 36)}%`;
        // very dark or black text
  -     const darkness = getRandomIntInclusive(16, 24);
  +     const darkness = `${getRandomIntInclusive(16, 24)}%`;
        // more extreme darkness
  -     const darker = getRandomIntInclusive(0, 12);
  +     const darker = `${getRandomIntInclusive(0, 12)}%`;
  ```

EXAMPLE + README CHANGES:

- only mix w css vars, vastly reducing api churn
- account for breaking api changes: see /examples/browser/index.html
- example interface overhaul/redesign, thanks @laramiedennis 💖
- external img: https://o.famebot.com/file/famebot/chromagen.png



# [0.9.0](https://github.com/famebot/chromagen/compare/v0.8.0...v0.9.0) (2023-10-16)


### BREAKING

* add missing color values, rename some scheme values ([11de0e4](https://github.com/famebot/chromagen/commit/11de0e42897586315affeb68bbe0e33fa212f780))


### BREAKING CHANGES

* renamed color scheme values ⚠️

- `darkhuehsl` => `huehsldark`
- `darkhuehsldarker` => `huehsldarker`
- `darkhuehsllowmid` => `huehsllowmid`

New color scheme values 🆕

- `complementhslxlight`
- `complementhsllighter`
- `complementhsllowmid`
- `analogoushslxlight`
- `analogoushsllighter`
- `analogoushsllowmid`



# [0.8.0](https://github.com/famebot/chromagen/compare/v0.7.0...v0.8.0) (2023-10-16)

* update pkg json repository format, lockfile, publish settings, examples

# [0.7.0](https://github.com/famebot/chromagen/compare/v0.6.0...v0.7.0) (2023-10-15)

### Features

* rename chromagen ([7efc2e3](https://github.com/famebot/chromagen/commit/7efc2e3f766d3f40def68e2d4bb34cf58a004f3f))

# [0.6.0](https://github.com/famebot/hsl-gen/compare/v0.5.1...v0.6.0) (2023-04-09)

## [0.5.1](https://github.com/famebot/hsl-gen/compare/v0.5.0...v0.5.1) (2023-04-09)

# [0.5.0](https://github.com/famebot/hsl-gen/compare/v0.4.0...v0.5.0) (2023-04-09)

### Features

* xlight, midrange, lowmid, swatch palette ([5b628a8](https://github.com/famebot/hsl-gen/commit/5b628a87ca4ee25cdaae49ee76592ce7ea6c6f3e))

### BREAKING CHANGES

* Deprecated huehslactive, huehslhover, huehslmuted,
darkhuehslactive, darkhuehslhover, and darkhuehslmuted

🎲 All mixing values now randomly generated 👾

- General reordering and organization of `src/index.js`
- mega update to `examples/browser-umd/index.html`
  - now shows swatch palette and supports copying values

New raw mixing values

- `xlight`: 84-92
- `midrange`: 48-64
- `lowmid`: 28-36

Usage

- `midrange` used for `analhslmid` and `comphslmid` lightness

DEPRECATED color scheme values

Goodbye

- `huehslactive`
- `huehslhover`
- `huehslmuted`
- `darkhuehslactive`
- `darkhuehslhover`
- `darkhuehslmuted`

Hello `huehslxlight` and `darkhuehsllowmid`

`huehslxlight`

Replaces `huehslactive` and `huehslhover`

- `xlight` for lightness
- `midrange` for saturation?

`darkhuehsllowmid`

Replaces `darkhuehslactive` and `darkhuehslhover`

- lowmid for lightness

# [0.4.0](https://github.com/famebot/hsl-gen/compare/v0.3.5...v0.4.0) (2023-04-06)

### Bug Fixes

* use darker instead of darkness for (anal|comp)hsltext ([19ea482](https://github.com/famebot/hsl-gen/commit/19ea482bc5884b376d160d5766d54bc473c50f69))

## [0.3.5](https://github.com/famebot/hsl-gen/compare/v0.3.4...v0.3.5) (2023-04-06)

### Features

* add analhsltext and comphsltext using darkness ([9177436](https://github.com/famebot/hsl-gen/commit/91774367d894ddb0303ceecfb95be77c12237017))

## [0.3.4](https://github.com/famebot/hsl-gen/compare/v0.3.3...v0.3.4) (2023-04-05)

### Features

* use fn instead of reloading page in UMD example ([e9c423c](https://github.com/famebot/hsl-gen/commit/e9c423c247c618f98543432847aad903a7564645))

## [0.3.3](https://github.com/famebot/hsl-gen/compare/v0.3.2...v0.3.3) (2023-04-03)

### Bug Fixes

* UMD color contrast ([112ede0](https://github.com/famebot/hsl-gen/commit/112ede0ff56e3feb66d407d978d61e1b02113241))

## [0.3.2](https://github.com/famebot/hsl-gen/compare/v0.3.1...v0.3.2) (2023-04-03)

### Bug Fixes

* use `latest` everywhere; UMD color contrast; devtools links ([30ce0fa](https://github.com/famebot/hsl-gen/commit/30ce0fa80bcfeacbecd841bebc13be49662f8a6f))

## [0.3.1](https://github.com/famebot/hsl-gen/compare/v0.3.0...v0.3.1) (2023-04-03)

### Features

* use raw hue in UMD example ([2541ce1](https://github.com/famebot/hsl-gen/commit/2541ce1ef7b272e8579b559954846d848bef93a7))

# [0.3.0](https://github.com/famebot/hsl-gen/compare/v0.2.2...v0.3.0) (2023-04-03)

### Features

* add raw values to returned object to expand customization possibilities ([c9b9b23](https://github.com/famebot/hsl-gen/commit/c9b9b2382db0b233e7ffb3e9e6f9f6f939bc512d))

## [0.2.2](https://github.com/famebot/hsl-gen/compare/v0.2.1...v0.2.2) (2023-04-01)

### Features

* add noop build script for umd example hosting ([8c54b52](https://github.com/famebot/hsl-gen/commit/8c54b5272c2703c86f2c98ff6ea1e4d4cbee92fe))

## [0.2.1](https://github.com/famebot/hsl-gen/compare/v0.2.0...v0.2.1) (2023-03-24)

### Bug Fixes

* standardize on `hslGen` not `HSLgen` for UMD compat ([b2b1f17](https://github.com/famebot/hsl-gen/commit/b2b1f17f5b51a5569013c2696300fb92ca5924cb))

# [0.2.0](https://github.com/famebot/hsl-gen/compare/v0.1.3...v0.2.0) (2023-03-24)

### Features

* provide CLS and UMD bundles via Microbundle ([5a39ee6](https://github.com/famebot/hsl-gen/commit/5a39ee6c83c1c2d2d5944e14376adef7008eabca))

## [0.1.3](https://github.com/famebot/hsl-gen/compare/v0.1.2...v0.1.3) (2023-03-17)

## [0.1.2](https://github.com/famebot/hsl-gen/compare/v0.1.1...v0.1.2) (2023-03-17)

## [0.1.1](https://github.com/famebot/hsl-gen/compare/v0.1.0...v0.1.1) (2023-03-17)

# [0.1.0](https://github.com/famebot/hsl-gen/compare/v0.0.9...v0.1.0) (2023-03-17)

## [0.0.9](https://github.com/famebot/hsl-gen/compare/v0.0.8...v0.0.9) (2023-03-17)

### Bug Fixes

* correct devDeps ([e6dedf2](https://github.com/famebot/hsl-gen/commit/e6dedf24fa82f46624ac374f376d10ce03e54f2c))

## [0.0.8](https://github.com/famebot/hsl-gen/compare/v0.0.7...v0.0.8) (2023-03-15)

## 0.0.7 (2023-03-15)

### Features

* init ([8aec25c](https://github.com/famebot/hsl-gen/commit/8aec25cb5335f3293346f29359826916eb61f2d6))
