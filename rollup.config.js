import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import inject from 'rollup-plugin-inject'

export default {
	entry: 'src/main.js',
	format: 'iife',
	plugins: [
		resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: [
        'node_modules/**'
      ]
    }),
    inject({
      include: './src/*.js',
      exclude: 'node_modules/**',
      jQuery: 'jquery', // <-- unsure which of these jquery(s) is correct
      $: 'jquery',
      jquery: 'jquery'
    })
	],
  globals: {
    jquery: 'jQuery'
  },
  external: ['jquery'],  // <-- if you comment out this line and rebuild, it works, but jquery still included in bundle. Have to npm uninstall jquery and leave this as is to work properly
  dest: 'public/bundle.js'
};
