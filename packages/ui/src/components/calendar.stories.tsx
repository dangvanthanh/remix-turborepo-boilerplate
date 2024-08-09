import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Calendar } from './calendar'

const meta: Meta<typeof Calendar> = {
	component: () => {
		const [date, setDate] = useState<Date | undefined>(new Date())

		return (
			<Calendar
				mode="single"
				selected={date}
				onSelect={setDate}
				className="rounded-md border"
			/>
		)
	},
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Default: Story = {}
