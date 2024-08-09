import type { Meta, StoryObj } from '@storybook/react'

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from './collapsible'

const meta: Meta<typeof Collapsible> = {
	component: () => (
		<Collapsible>
			<CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
			<CollapsibleContent>
				Yes. Free to use for personal and commercial projects. No attribution
				required.
			</CollapsibleContent>
		</Collapsible>
	),
}

export default meta

type Story = StoryObj<typeof Collapsible>

export const Default: Story = {}
