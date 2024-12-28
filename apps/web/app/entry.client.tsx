/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { i18n } from '@lingui/core'
import { detect, fromHtmlTag } from '@lingui/detect-locale'
import { I18nProvider } from '@lingui/react'
import { loadCatalog } from '@repo/i18n'
import { StrictMode, startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'

async function main() {
	const locale = detect(fromHtmlTag('lang')) || 'en'

	await loadCatalog(locale)

	startTransition(() => {
		hydrateRoot(
			document,
			<StrictMode>
				<I18nProvider i18n={i18n}>
					<HydratedRouter />
				</I18nProvider>
			</StrictMode>,
		)
	})
}

main()
