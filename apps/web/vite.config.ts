import { lingui } from '@lingui/vite-plugin'
import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [remix(), macrosPlugin(), lingui(), tsconfigPaths()],
})
