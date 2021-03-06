// Experimental config for bundling Fathom into a single file for use inside
// web extensions, etc.
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  name: 'fathom',
  output: {
    file: 'dist/fathom.js',
    format: 'umd',
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: ['node_modules/**', './*'],
    }),
  ],
};
