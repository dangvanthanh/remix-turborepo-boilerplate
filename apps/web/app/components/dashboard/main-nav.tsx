import { NavLink } from '@remix-run/react'
import { cn } from '~/lib/utils'

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn('flex items-center space-x-4 lg:space-x-6', className)}
			{...props}
		>
			<NavLink
				to="/"
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				Overview
			</NavLink>
			<NavLink
				to="/"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Customers
			</NavLink>
			<NavLink
				to="/"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Products
			</NavLink>
			<NavLink
				to="/"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Settings
			</NavLink>
		</nav>
	)
}
