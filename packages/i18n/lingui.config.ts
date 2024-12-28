import { defineConfig } from '@lingui/cli'

export default defineConfig({
	sourceLocale: 'en',
	locales: ['en', 'vi', 'fr'],
	rootDir: '../../',
	catalogs: [
		{
			path: '<rootDir>/locales/{locale}/messages',
			include: ['apps/**', 'packages/**'],
		},
	],
})
