import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";

export default {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap:true,
    },
    plugins: [
        resolve(),
        babel({ 
          babelHelpers: 'runtime',
          "plugins": [
            "@babel/plugin-external-helpers",
            "transform-async-to-generator",
            "@babel/plugin-transform-runtime"
          ],
        }),
        commonjs(),
        uglify(),
    ]
  };