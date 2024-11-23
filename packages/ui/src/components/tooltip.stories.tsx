import type { Meta, StoryObj } from '@storybook/react'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './tooltip'
import { Button } from './button'

const meta: Meta<typeof Tooltip> = {
	component: () => (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Hover</Button>
				</TooltipTrigger>
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
