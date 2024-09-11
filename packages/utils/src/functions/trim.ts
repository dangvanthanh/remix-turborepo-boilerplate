export function trim(u: unknown) {
	return typeof u === 'string' ? u.trim() : u
}
