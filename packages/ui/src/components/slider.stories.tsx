import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider'

const meta: Meta<typeof Slider> = {
	component: () => <Slider defaultValue={[33]} max={100} step={1} />,
}

export default meta

type Story = StoryObj<typeof Slider>

export const Default: Story = {}
