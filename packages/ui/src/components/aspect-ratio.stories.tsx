import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './aspect-ratio'

const meta: Meta<typeof AspectRatio> = {
	component: () => (
		<AspectRatio ratio={16 / 9} className="bg-muted">
			<img
				src="https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
				className="h-full w-full rounded-md object-cover"
			/>
		</AspectRatio>
	),
}

export default meta

type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {}
