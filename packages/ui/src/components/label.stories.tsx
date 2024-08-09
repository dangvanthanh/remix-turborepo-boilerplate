import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './label'
import { Checkbox } from './checkbox'

const meta: Meta<typeof Label> = {
	component: () => (
		<div>
			<div className="flex items-center space-x-2">
				<Checkbox id="terms" />
				<Label htmlFor="terms">Accept terms and conditions</Label>
			</div>
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {}
