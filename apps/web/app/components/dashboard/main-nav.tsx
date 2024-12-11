import { useLingui } from '@lingui/react/macro'
import { cn } from '@repo/ui/cn'
import { NavLink } from 'react-router'

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	const { t } = useLingui()
	const navs = [
		{ url: '/', name: t`Overview`, active: true },
		{ url: '/', name: t`Customers`, active: false },
		{ url: '/', name: t`Products`, active: false },
		{ url: '/', name: t`Settings`, active: false },
	]

	return (
		<nav
			className={cn('flex items-center space-x-4 lg:space-x-6', className)}
			{...props}
		>
			{navs.map((nav) => (
				<NavLink
					key={nav.name}
					to={nav.url}
					className={`text-sm font-medium transition-colors hover:text-primary ${
						nav.active ? '' : 'text-muted-foreground'
					}`}
				>
					{nav.name}
				</NavLink>
			))}
		</nav>
	)
}
