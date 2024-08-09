import type { Meta, StoryObj } from '@storybook/react'

import { Label } from './label'
import { Switch } from './switch'

const meta: Meta<typeof Switch> = {
	component: () => (
		<div className="flex items-center space-x-2">
			<Switch id="airplane-mode" />
			<Label htmlFor="airplane-mode">Airplane Mode</Label>
		</div>
	),
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {}
