import type { Meta, StoryObj } from '@storybook/react'

import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
} from './context-menu'

const meta: Meta<typeof ContextMenu> = {
	component: () => (
		<ContextMenu>
			<ContextMenuTrigger>Right click</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuItem>Profile</ContextMenuItem>
				<ContextMenuItem>Billing</ContextMenuItem>
				<ContextMenuItem>Team</ContextMenuItem>
				<ContextMenuItem>Subscription</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
}

export default meta

type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {}
