import type { Meta, StoryObj } from '@storybook/react'

import { Bold, Italic, Underline } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta: Meta<typeof ToggleGroup> = {
	component: () => (
		<ToggleGroup type="multiple">
			<ToggleGroupItem value="bold" aria-label="Toggle bold">
				<Bold className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Toggle italic">
				<Italic className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Toggle underline">
				<Underline className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	),
}

export default meta

type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {}
