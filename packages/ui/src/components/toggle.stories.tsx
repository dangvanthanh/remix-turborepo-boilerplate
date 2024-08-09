import type { Meta, StoryObj } from '@storybook/react'

import { Bold } from 'lucide-react'

import { Toggle } from './toggle'

const meta: Meta<typeof Toggle> = {
	component: () => (
		<Toggle aria-label="Toggle bold">
			<Bold className="h-4 w-4" />
		</Toggle>
	),
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Default: Story = {}
