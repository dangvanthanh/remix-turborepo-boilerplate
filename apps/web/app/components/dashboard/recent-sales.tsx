import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/avatar'
import { formatterDolar } from '@repo/shared'

export function RecentSales() {
	const recentSales = [
		{
			avatar: 'https://www.shadcn-vue.com/avatars/01.png',
			avatarFallback: 'OM',
			name: 'Olivia Martin',
			email: 'olivia.martin@email.com',
			sales: 1900,
		},
		{
			avatar: 'https://www.shadcn-vue.com/avatars/02.png',
			avatarFallback: 'JL',
			name: 'James Lee',
			email: 'james.lee@email.com',
			sales: 39,
		},
		{
			avatar: 'https://www.shadcn-vue.com/avatars/03.png',
			avatarFallback: 'IN',
			name: 'Isabella Nguyen',
			email: 'isabella.nguyen@email.com',
			sales: 299,
		},
		{
			avatar: 'https://www.shadcn-vue.com/avatars/04.png',
			avatarFallback: 'WK',
			name: 'William Kim',
			email: 'will@email.com',
			sales: 99,
		},
		{
			avatar: 'https://www.shadcn-vue.com/avatars/05.png',
			avatarFallback: 'SD',
			name: 'Sofia Davis',
			email: 'sofia.davis@email.com',
			sales: 199,
		},
	]

	return (
		<div className="space-y-8">
			{recentSales.map((sale) => (
				<div className="flex items-center" key={sale.email}>
					<Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
						<AvatarImage src={sale.avatar} alt={sale.name} />
						<AvatarFallback>{sale.avatarFallback}</AvatarFallback>
					</Avatar>
					<div className="ml-4 space-y-1">
						<p className="text-sm font-medium leading-none">{sale.name}</p>
						<p className="text-sm text-muted-foreground">{sale.email}</p>
					</div>
					<div className="ml-auto font-medium">
						{formatterDolar(sale.sales)}
					</div>
				</div>
			))}
		</div>
	)
}
