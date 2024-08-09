import type { Meta, StoryObj } from '@storybook/react'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './tooltip'

const meta: Meta<typeof Tooltip> = {
	component: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>Hover</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {}
