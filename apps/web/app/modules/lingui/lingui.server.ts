import { createCookie } from 'react-router';
import config from './config'
import { RemixLingui } from './remix.server'

export const localeCookie = createCookie('lng', {
	path: '/',
	sameSite: 'lax',
	secure: process.env.NODE_ENV === 'production',
	httpOnly: true,
})

export const linguiServer = new RemixLingui({
	detection: {
		supportedLanguages: config.locales,
		fallbackLanguage:
			(!!config.fallbackLocales && config.fallbackLocales?.default) || 'en',
		cookie: localeCookie,
	},
})
