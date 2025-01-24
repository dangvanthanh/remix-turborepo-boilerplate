import { lingui } from '@lingui/vite-plugin'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [
		tailwindcss(),
		macrosPlugin(),
		lingui({
			configPath: '../../lingui.config.ts',
		}),
		reactRouter(),
		tsconfigPaths(),
	],
})
