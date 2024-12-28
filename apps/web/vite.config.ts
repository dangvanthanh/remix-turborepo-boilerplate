import { lingui } from '@lingui/vite-plugin'
import { reactRouter } from '@react-router/dev/vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwindcss, autoprefixer],
		},
	},
	plugins: [
		macrosPlugin(),
		lingui({
			configPath: '../../lingui.config.ts',
		}),
		reactRouter(),
		tsconfigPaths(),
	],
})
