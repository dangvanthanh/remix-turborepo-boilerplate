import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@radix-ui/react-popover'
import type { Meta, StoryObj } from '@storybook/react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import React from 'react'
import { cn } from '../utils'
import { Button } from './button'
import { Calendar } from './calendar'

const meta: Meta = {
	component: () => {
		const [date, setDate] = React.useState<Date>()
		return (
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						className={cn(
							'w-[280px] justify-start text-left font-normal gap-2',
							!date && 'text-muted-foreground',
						)}
					>
						<CalendarIcon size={16} />
						{date ? format(date, 'PPP') : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						initialFocus
						className="rounded-md border"
					/>
				</PopoverContent>
			</Popover>
		)
	},
}

export default meta

type Story = StoryObj

export const Default: Story = {}
