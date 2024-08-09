import type { Meta, StoryObj } from '@storybook/react'

import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

const meta: Meta<typeof HoverCard> = {
	component: () => (
		<HoverCard>
			<HoverCardTrigger>Hover</HoverCardTrigger>
			<HoverCardContent>
				The React Framework – created and maintained by @vercel.
			</HoverCardContent>
		</HoverCard>
	),
}

export default meta

type Story = StoryObj<typeof HoverCard>

export const Default: Story = {}
