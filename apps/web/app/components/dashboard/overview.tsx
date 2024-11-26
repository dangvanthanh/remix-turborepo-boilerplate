import { VisAxis, VisStackedBar, VisXYContainer } from '@unovis/react'

interface DataRecord {
	name: string
	total: number
}

const random = () => Math.floor(Math.random() * 5000) + 1000

const data: DataRecord[] = [
	{ name: 'Jan', total: random() },
	{ name: 'Feb', total: random() },
	{ name: 'Mar', total: random() },
	{ name: 'Apr', total: random() },
	{ name: 'May', total: random() },
	{ name: 'Jun', total: random() },
	{ name: 'Jul', total: random() },
	{ name: 'Aug', total: random() },
	{ name: 'Sep', total: random() },
	{ name: 'Oct', total: random() },
	{ name: 'Nov', total: random() },
	{ name: 'Dec', total: random() },
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
