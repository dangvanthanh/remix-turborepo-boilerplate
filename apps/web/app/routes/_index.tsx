import { Trans, t } from '@lingui/macro'
import { Button } from '@repo/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@repo/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui/tabs'
import {
	Activity as ActivityIcon,
	CreditCard as CreditCardIcon,
	DollarSign as DollarSignIcon,
	Users as UsersIcon,
} from 'lucide-react'
import type { MetaFunction } from 'react-router'
import {
	CalendarDateRangePicker,
	MainNav,
	Overview,
	RecentSales,
	Search,
	TeamSwitcher,
	UserNav,
} from '~/components/dashboard'
import { LocaleSelector } from '~/modules/lingui/lingui'

export const meta: MetaFunction = () => {
	return [
		{ title: 'Remix, Turborepo, and Vite' },
		{ name: 'description', content: 'Welcome to Remix, Turborepo, and Vite!' },
	]
}

export default function Index() {
	const tabs = [
		{ name: t`Overview`, value: 'overview', disabled: false },
		{ name: t`Analytics`, value: 'analytics', disabled: true },
		{ name: t`Reports`, value: 'reports', disabled: true },
		{ name: t`Notifications`, value: 'notifications', disabled: true },
	]

	const cards = [
		{
			title: t`Total Revenue`,
			icon: <DollarSignIcon className="h-4 w-4 text-muted-foreground" />,
			statistics: '$45,231.89',
			description: '+20.1% from last month',
		},
		{
			title: t`Subscriptions`,
			icon: <UsersIcon className="h-4 w-4 text-muted-foreground" />,
			statistics: '+2350',
			description: '+180.1% from last month',
		},
		{
			title: t`Sales`,
			icon: <CreditCardIcon className="h-4 w-4 text-muted-foreground" />,
			statistics: '+12,234',
			description: '+19% from last month',
		},
		{
			title: t`Active Now`,
			icon: <ActivityIcon className="h-4 w-4 text-muted-foreground" />,
			statistics: '+573',
			description: '+201 since last hour',
		},
	]

	return (
		<div className="flex flex-col">
			<div className="border-b">
				<div className="flex h-16 items-center px-4">
					<TeamSwitcher />
					<MainNav className="mx-6" />
					<div className="ml-auto flex items-center space-x-4">
						<Search />
						<UserNav />
						<LocaleSelector />
					</div>
				</div>
			</div>
			<div className="flex-1 space-y-4 p-8 pt-6">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">
						<Trans>Dashboard</Trans>
					</h2>
					<div className="flex items-center space-x-2">
						<CalendarDateRangePicker />
						<Button>
							<Trans>Download</Trans>
						</Button>
					</div>
				</div>
				<Tabs defaultValue="overview" className="space-y-4">
					<TabsList>
						{tabs.map((tab) => (
							<TabsTrigger
								key={tab.value}
								value={tab.value}
								disabled={tab.disabled}
							>
								{tab.name}
							</TabsTrigger>
						))}
					</TabsList>
					<TabsContent value="overview" className="space-y-4">
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
							{cards.map((card) => (
								<Card key={card.title}>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											{card.title}
										</CardTitle>
										{card.icon}
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">{card.statistics}</div>
										<p className="text-xs text-muted-foreground">
											{card.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
							<Card className="col-span-4">
								<CardHeader>
									<CardTitle>
										<Trans>Overview</Trans>
									</CardTitle>
								</CardHeader>
								<CardContent className="pl-2">
									<Overview />
								</CardContent>
							</Card>
							<Card className="col-span-3">
								<CardHeader>
									<CardTitle>
										<Trans>Recent Sales</Trans>
									</CardTitle>
									<CardDescription>
										You made 265 sales this month.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<RecentSales />
								</CardContent>
							</Card>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
