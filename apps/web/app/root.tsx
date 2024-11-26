import { i18n } from '@lingui/core'
import { useEffect } from 'react'
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	data,
	isRouteErrorResponse,
} from 'react-router'
import type { Route } from './+types/root'
import { loadCatalog, useLocale } from './modules/lingui/lingui'
import { linguiServer, localeCookie } from './modules/lingui/lingui.server'
import './styles.css'
import { Button } from '@repo/ui/button'

export async function loader({ request }: Route.LoaderArgs) {
	const locale = await linguiServer.getLocale(request)
	const cookie = await localeCookie.serialize(locale)

	return data({ locale }, { headers: { 'Set-Cookie': cookie } })
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!'
	let details = 'An unexpected error occurred.'

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error'
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message
	}

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>404 - Page not found</title>
				<Meta />
				<Links />
			</head>
			<body>
				<main className="flex items-center justify-center min-h-screen">
					<div className="w-full space-y-6 text-center">
						<div className="space-y-3">
							<h1 className="text-6xl md:text-8xl tracking-tighter font-semibold">
								{message}
							</h1>
							<p className="text-muted-foreground">{details}</p>
						</div>
						<Button asChild>
							<a href="/">Back to home</a>
						</Button>
					</div>
				</main>
			</body>
		</html>
	)
}
