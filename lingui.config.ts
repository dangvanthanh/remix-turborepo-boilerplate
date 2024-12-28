import { defineConfig } from '@lingui/cli'

export default defineConfig({
	sourceLocale: 'en',
	locales: ['en', 'vi', 'fr'],
	catalogs: [
		{
			path: '<rootDir>/packages/i18n/locales/{locale}',
			include: ['apps', 'packages'],
			exclude: ['**/node_modules/**', '**/build/**', '**/dist/**'],
		},
	],
})
