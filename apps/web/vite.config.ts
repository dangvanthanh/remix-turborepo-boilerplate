import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { lingui } from '@lingui/vite-plugin'
import macrosPlugin from 'vite-plugin-babel-macros'

export default defineConfig({
	plugins: [remix(), macrosPlugin(), lingui(), tsconfigPaths()],
})
