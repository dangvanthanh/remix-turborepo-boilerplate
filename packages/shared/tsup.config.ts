import { type Options, defineConfig } from 'tsup'

export default defineConfig((options: Options) => ({
	entry: ['src/**/*.ts', 'src/**/*.tsx'],
	format: ['esm'],
  esbuildOptions(options) {
		options.banner = {
			js: '"use client"',
		}
	},
	dts: true,
	minify: true,
	external: ['react'],
	...options,
}))