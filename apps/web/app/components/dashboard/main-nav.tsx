import { NavLink } from '@remix-run/react'
import { cn } from '~/lib/utils'

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	const navs = [
		{ url: '/', name: 'Overview', active: true },
		{ url: '/', name: 'Customers', active: false },
		{ url: '/', name: 'Products', active: false },
		{ url: '/', name: 'Settings', active: false },
	]

	return (
		<nav
			className={cn('flex items-center space-x-4 lg:space-x-6', className)}
			{...props}
		>
			{navs.map((nav) => (
				<NavLink
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
