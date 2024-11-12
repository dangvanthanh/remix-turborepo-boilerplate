import { i18n } from '@lingui/core'
import {
	type LinksFunction,
	type LoaderFunctionArgs,
	data,
} from '@remix-run/node'
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import { useEffect } from 'react'
import { loadCatalog, useLocale } from './modules/lingui/lingui'
import { linguiServer, localeCookie } from './modules/lingui/lingui.server'
import styles from './styles.css?url'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export async function loader({ request }: LoaderFunctionArgs) {
	const locale = await linguiServer.getLocale(request)

	return data(
		{
			locale,
		},
		{
			headers: {
				'Set-Cookie': await localeCookie.serialize(locale),
			},
		},
	)
}

export function Layout({ children }: { children: React.ReactNode }) {
	const locale = useLocale()

	useEffect(() => {
		if (i18n.locale !== locale) {
			loadCatalog(locale)
		}
	}, [locale])

	return (
		<html lang={locale ?? 'en'}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}
