import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'
import { Toaster } from './toaster'
import { useToast } from './use-toast'

const meta: Meta<typeof Toaster> = {
	component: () => {
		const { toast } = useToast()
		return (
			<>
				<Button
					variant="outline"
					onClick={() =>
						toast({
							title: 'Scheduled: Catch up',
							description: new Intl.DateTimeFormat('en-GB', {
								dateStyle: 'full',
								timeStyle: 'long',
							}).format(new Date()),
						})
					}
				>
					Show Toast
				</Button>
				<Toaster />
			</>
		)
	},
}

export default meta

type Story = StoryObj<typeof Toaster>

export const Default: Story = {}
