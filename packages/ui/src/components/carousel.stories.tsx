import type { Meta, StoryObj } from '@storybook/react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './carousel'

const meta: Meta<typeof Carousel> = {
	component: () => (
		<Carousel className="w-full max-w-xs">
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={`c-${index - 1}`}>
						<div className="p-1">
							<div>
								<div className="flex aspect-square items-center justify-center p-6">
									<span className="text-4xl font-semibold">{index + 1}</span>
								</div>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	),
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {}
