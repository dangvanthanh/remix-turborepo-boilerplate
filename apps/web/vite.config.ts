import { lingui } from '@lingui/vite-plugin'
import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [reactRouter(), macrosPlugin(), lingui(), tsconfigPaths()],
})
