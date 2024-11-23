/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import { PassThrough } from 'node:stream'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import type { AppLoadContext, EntryContext } from '@remix-run/node'
import { createReadableStreamFromReadable } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { isbot } from 'isbot'
import { renderToPipeableStream } from 'react-dom/server'
import { loadCatalog } from './modules/lingui/lingui'
import { linguiServer } from './modules/lingui/lingui.server'

// Reject/cancel all pending promises after 5 seconds
export const streamTimeout = 5000

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
	// This is ignored so we can keep it in the template for visibility.  Feel
	// free to delete this parameter in your app if you're not using it!
	_loadContext: AppLoadContext,
) {
	return isbot(request.headers.get('user-agent') || '')
		? handleBotRequest(
				request,
				responseStatusCode,
				responseHeaders,
				remixContext,
			)
		: handleBrowserRequest(
				request,
				responseStatusCode,
				responseHeaders,
				remixContext,
			)
}

function handleBotRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	return new Promise((resolve, reject) => {
		let shellRendered = false
		const { pipe, abort } = renderToPipeableStream(
			<RemixServer context={remixContext} url={request.url} />,
			{
				onAllReady() {
					shellRendered = true
					const body = new PassThrough()
					const stream = createReadableStreamFromReadable(body)

					responseHeaders.set('Content-Type', 'text/html')

					resolve(
						new Response(stream, {
							headers: responseHeaders,
							status: responseStatusCode,
						}),
					)

					pipe(body)
				},
				onShellError(error: unknown) {
					reject(error)
				},
				onError(error: unknown) {
					// Log streaming rendering errors from inside the shell.  Don't log
					// errors encountered during initial shell rendering since they'll
					// reject and get logged in handleDocumentRequest.
					if (shellRendered) {
						console.error(error)
					}
				},
			},
		)

		// Automatically timeout the React renderer after 6 seconds, which ensures
		// React has enough time to flush down the rejected boundary contents
		setTimeout(abort, streamTimeout + 1000)
	})
}

async function handleBrowserRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	const locale = await linguiServer.getLocale(request)
	await loadCatalog(locale)

	return new Promise((resolve, reject) => {
		let shellRendered = false
		const { pipe, abort } = renderToPipeableStream(
			<I18nProvider i18n={i18n}>
				<RemixServer context={remixContext} url={request.url} />
			</I18nProvider>,
			{
				onShellReady() {
					shellRendered = true
					const body = new PassThrough()
					const stream = createReadableStreamFromReadable(body)

					responseHeaders.set('Content-Type', 'text/html')

					resolve(
						new Response(stream, {
							headers: responseHeaders,
							status: responseStatusCode,
						}),
					)

					pipe(body)
				},
				onShellError(error: unknown) {
					reject(error)
				},
				onError(error: unknown) {
					// Log streaming rendering errors from inside the shell.  Don't log
					// errors encountered during initial shell rendering since they'll
					// reject and get logged in handleDocumentRequest.
					if (shellRendered) {
						console.error(error)
					}
				},
			},
		)

		// Automatically timeout the React renderer after 6 seconds, which ensures
		// React has enough time to flush down the rejected boundary contents
		setTimeout(abort, streamTimeout + 1000)
	})
}
