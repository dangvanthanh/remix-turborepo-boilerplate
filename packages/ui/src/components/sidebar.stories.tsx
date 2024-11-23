import type { Meta, StoryObj } from '@storybook/react'
import {
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarGroup,
	SidebarFooter,
	SidebarProvider,
	SidebarTrigger,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from './sidebar'
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'

const items = [
	{
		title: 'Home',
		url: '#',
		icon: Home,
	},
	{
		title: 'Inbox',
		url: '#',
		icon: Inbox,
	},
	{
		title: 'Calendar',
		url: '#',
		icon: Calendar,
	},
	{
		title: 'Search',
		url: '#',
		icon: Search,
	},
	{
		title: 'Settings',
		url: '#',
		icon: Settings,
	},
]

const meta: Meta<typeof Sidebar> = {
	component: () => (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader />
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Application</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter />
			</Sidebar>
			<main>
				<SidebarTrigger />
				<div>&nbsp;</div>
			</main>
		</SidebarProvider>
	),
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {}
