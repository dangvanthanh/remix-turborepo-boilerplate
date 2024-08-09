import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta: Meta<typeof Input> = {
	component: () => <Input placeholder="Email" />,
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}
