import { i18n } from '@lingui/core'
import { Trans } from '@lingui/react'
import { getLanguages, loadCatalog, useLocale } from '@repo/i18n'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@repo/ui/dropdown-menu'
import { useEffect } from 'react'
import { Link } from 'react-router'

function getIconFlag(name: string) {
	return `https://hatscripts.github.io/circle-flags/flags/${name}.svg`
}

export function LocaleSelector() {
	const locale = useLocale()
	const languages = getLanguages()
	const icons = [
		{
			key: 'en',
			icon: getIconFlag('us'),
		},
		{
			key: 'vi',
			icon: getIconFlag('vn'),
		},
		{
			key: 'fr',
			icon: getIconFlag('fr'),
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
				<button
					type="button"
					className="flex justify-center items-center bg-gray-200 h-8 w-8 rounded-full overflow-hidden"
				>
					<img
						src={icons.find((icon) => icon.key === locale)?.icon}
						alt=""
						className="h-6 w-6 object-cover"
					/>
				</button>
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
