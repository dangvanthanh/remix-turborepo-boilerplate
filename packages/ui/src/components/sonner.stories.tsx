import type { Meta, StoryObj } from '@storybook/react'

import { toast } from 'sonner'
import { Button } from './button'
import { Toaster } from './sonner'

const meta: Meta<typeof Toaster> = {
	component: () => (
		<>
			<Button
				variant="outline"
				onClick={() =>
					toast('Event has been created', {
						description: new Intl.DateTimeFormat('en-GB', {
							dateStyle: 'full',
							timeStyle: 'long',
						}).format(new Date()),
						action: {
							label: 'Undo',
							onClick: () => console.log('Undo'),
						},
					})
				}
			>
				Show Toast
			</Button>
			<Toaster />
		</>
	),
}

export default meta

type Story = StoryObj<typeof Toaster>

export const Default: Story = {}
