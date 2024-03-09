'use client'

import { VisAxis, VisStackedBar, VisXYContainer } from '@unovis/react'

interface DataRecord {
	name: string
	total: number
}

const data: DataRecord[] = [
	{
		name: 'Jan',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'Feb',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'Mar',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'Apr',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'May',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'Jun',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'Jul',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'Aug',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'Sep',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'Oct',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'Nov',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
	{
		name: 'Dec',
		total: Math.floor(Math.random() * 5000) + 1000,
	},
]

const x = (_d: DataRecord, i: number) => i
const y = (d: DataRecord) => d.total

export function Overview() {
	return (
		<VisXYContainer height={350} data={data}>
			<VisStackedBar
				x={x}
				y={y}
				color="#222"
				roundedCorners={4}
				barPadding={0.15}
			/>
			<VisAxis
				type="x"
				numTicks={data.length}
				tickFormat={(_: number | Date, i: number) => data[i].name}
				gridLine={false}
				tickLine={false}
				domainLine={false}
				color="#888"
			/>
			<VisAxis
				type="y"
				numTicks={data.length}
				tickFormat={(d) => `$${d}`}
				gridLine={false}
				tickLine={false}
				domainLine={false}
				color="#888"
			/>
		</VisXYContainer>
	)
}
