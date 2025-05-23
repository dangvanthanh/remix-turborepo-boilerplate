export function getDateTimeLocal(timestamp?: Date): string {
	const d = timestamp ? new Date(timestamp) : new Date()
	if (d.toString() === 'Invalid Date') return ''
	return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
		.toISOString()
		.split(':')
		.slice(0, 2)
		.join(':')
}

export function formatDate(dateString: string) {
	return new Date(dateString).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	})
}

export function getFirstAndLastDay(day: number) {
	const today = new Date()
	const currentDay = today.getDate()
	const currentMonth = today.getMonth()
	const currentYear = today.getFullYear()
	if (currentDay >= day) {
		// if the current day is greater than target day, it means that we just passed it
		return {
			firstDay: new Date(currentYear, currentMonth, day),
			lastDay: new Date(currentYear, currentMonth + 1, day - 1),
		}
	}

	// if the current day is less than target day, it means that we haven't passed it yet
	const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear // if the current month is January, we need to go back a year
	const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1 // if the current month is January, we need to go back to December
	return {
		firstDay: new Date(lastYear, lastMonth, day),
		lastDay: new Date(currentYear, currentMonth, day - 1),
	}
}

// Function to get the last day of the current month
export function getLastDayOfMonth() {
	const today = new Date()
	const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0) // This will give the last day of the current month
	return lastDay.getDate()
}

// Adjust the billingCycleStart based on the number of days in the current month
export function getAdjustedBillingCycleStart(billingCycleStart: number) {
	const lastDay = getLastDayOfMonth()

	if (billingCycleStart > lastDay) {
		return lastDay
	}

	return billingCycleStart
}

export function getBillingStartDate(billingCycleStart: number) {
	const today = new Date()
	const currentDay = today.getDate()
	const currentMonth = today.getMonth()
	const currentYear = today.getFullYear()
	const adjustedBillingCycleStart =
		getAdjustedBillingCycleStart(billingCycleStart)

	if (currentDay <= adjustedBillingCycleStart) {
		// if the current day is less than the billing cycle start, we need to go back a month
		const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1 // if the current month is January, we need to go back to December
		const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear // if the current month is January, we need to go back a year
		return new Date(lastYear, lastMonth, adjustedBillingCycleStart)
	}

	return new Date(currentYear, currentMonth, adjustedBillingCycleStart)
}
