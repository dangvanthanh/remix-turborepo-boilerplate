import { t } from '@lingui/macro'
import { Input } from '~/components/ui/input'

export function Search() {
	const placeholder = t`Search`

	return (
		<div>
			<Input
				type="search"
				placeholder={`${placeholder}...`}
				className="md:w-[100px] lg:w-[300px]"
			/>
		</div>
	)
}
