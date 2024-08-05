import { type MessageDescriptor, i18n } from '@lingui/core'
import { msg } from '@lingui/macro'
import { Trans } from '@lingui/react'
import {
	Link,
	useFetcher,
	useFetchers,
	useMatches,
	useRouteLoaderData,
} from '@remix-run/react'
import { useEffect } from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import type { RootLoaderType, action } from '~/root'
import type config from './config'

export function getLanguages(): Array<{
	key: (typeof config.locales)[number]
	label: MessageDescriptor
}> {
	return [
		{ key: 'en', label: msg`English` },
		{ key: 'vi', label: msg`Vietnamese` },
		{ key: 'fr', label: msg`French` },
	]
}

export async function loadCatalog(locale: string) {
	const { messages } = await import(`../../locales/${locale}.po`)

	return i18n.loadAndActivate({ locale, messages })
}

/**
 * Get the locale returned by the root route loader under the `locale` key.
 * @example
 * let locale = useLocale()
 * let formattedDate = date.toLocaleDateString(locale);
 * @example
 * let locale = useLocale("language")
 * let formattedDate = date.toLocaleDateString(locale);
 */
export function useLocale(localeKey = 'locale'): string {
	const [rootMatch] = useMatches()
	const { [localeKey]: locale } =
		(rootMatch.data as Record<string, string>) ?? {}
	if (!locale) throw new Error('Missing locale returned by the root loader.')
	if (typeof locale === 'string') return locale
	throw new Error('Invalid locale returned by the root loader.')
}

export function useOptimisticLocale() {
	const fetchers = useFetchers()
	const themeFetcher = fetchers.find((f) => f.formAction === '/')

	if (themeFetcher?.formData) {
		const submission = Object.fromEntries(themeFetcher.formData)

		// Use Valibot or zod to validate
		if (
			submission.status === 'success' &&
			typeof submission.value === 'object' &&
			'locale' in submission.value
		) {
			return submission.value.locale as string
		}
	}
}

export function LocaleSelector() {
	const locale = useLocale()
	const languages = getLanguages()
	const icons = [
		{
			key: 'en',
			icon: 'https://hatscripts.github.io/circle-flags/flags/us.svg',
		},
		{
			key: 'vi',
			icon: 'https://hatscripts.github.io/circle-flags/flags/vn.svg',
		},
		{
			key: 'fr',
			icon: 'https://hatscripts.github.io/circle-flags/flags/fr.svg',
		},
	]

	useEffect(() => {
		if (i18n.locale !== locale) {
			loadCatalog(locale)
		}
	}, [locale])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex justify-center items-center bg-gray-200 h-8 w-8 rounded-full overflow-hidden">
					<img
						src={icons.find((icon) => icon.key === locale)?.icon}
						alt=""
						className="h-6 w-6 object-cover"
					/>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				{languages.map((language) => (
					<DropdownMenuItem
						key={language.label.id}
						disabled={locale === language.key}
					>
						<Link
							to={`?lng=${language.key}`}
							reloadDocument
							className="w-full block"
						>
							<Trans id={language.label.id} />
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export function useLocaleSelector() {
	const data = useRouteLoaderData<RootLoaderType>('root')
	const fetcher = useFetcher<typeof action>()

	const optimisticLocale = useOptimisticLocale()
	const locale = optimisticLocale ?? data?.locale ?? 'en'

	const setLocale = (locale: string) => {
		fetcher.submit(
			{
				locale,
			},
			{
				method: 'POST',
				action: '/',
			},
		)
	}

	return {
		locale,
		setLocale,
	}
}
