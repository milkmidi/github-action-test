import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'src/index.ts',
  output: [
    { file: 'dist/bundle.cjs.js', format: 'cjs' },
    { file: 'dist/bundle.cjs.min.js', format: 'cjs', plugins: [terser()] },
    { file: 'dist/bundle.es.js', format: 'es' },
    { file: 'dist/bundle.es.min.js', format: 'es', plugins: [terser()] },
    /*
    {
      name: 'RollupTemplate',
      file: 'dist/bundle.umd.js',
      format: 'umd',
      globals: {
        lodash: '_',
        react: 'React',
      },
    }, // */
  ],
  plugins: [
    // https://www.npmjs.com/package/rollup-plugin-typescript2
    typescript({
      tsconfig: './tsconfig.json',
    }),
    // terser(),
  ],
};

export default options;
