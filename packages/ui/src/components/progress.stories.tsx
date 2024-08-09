import type { Meta, StoryObj } from '@storybook/react'

import { Progress } from './progress'

const meta: Meta<typeof Progress> = {
	component: () => <Progress value={33} />,
}

export default meta

type Story = StoryObj<typeof Progress>

export const Default: Story = {}
