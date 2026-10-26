import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const sharedPlugins = [
  commonjs(),
];

export default [
  {
    input: 'src/chromagen.js',
    output: {
      file: 'dist/chromagen.umd.js',
      format: 'umd',
      name: 'chromagen',
      exports: 'named',
      sourcemap: false,
    },
    plugins: [
      ...sharedPlugins,
      terser(),
    ],
  },
  {
    input: 'src/chromagen.js',
    output: {
      file: 'dist/chromagen.cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
    plugins: [
      ...sharedPlugins,
    ],
  },
];