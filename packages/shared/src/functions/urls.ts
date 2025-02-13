export function isValidUrl(url: string) {
	try {
		new URL(url)
		return true
	} catch (e) {
		return false
	}
}

export function getUrlFromString(str: string) {
	if (isValidUrl(str)) return str
	try {
		if (str.includes('.') && !str.includes(' ')) {
			return new URL(`https://${str}`).toString()
		}
	} catch (e) {
		return null
	}
}

export function getSearchParams(url: string) {
	// Create a params object
	const params = {} as Record<string, string>

	new URL(url).searchParams.forEach((val, key) => {
		params[key] = val
	})

	return params
}

export function getParamsFromURL(url: string) {
	if (!url) return {}
	try {
		const params = new URL(url).searchParams
		const paramsObj: Record<string, string> = {}
		for (const [key, value] of params.entries()) {
			if (value && value !== '') {
				paramsObj[key] = value
			}
		}
		return paramsObj
	} catch (e) {
		return {}
	}
}

export function constructURLFromUTMParams(
	url: string,
	utmParams: Record<string, string>,
) {
	if (!url) return ''
	try {
		const newURL = new URL(url)
		for (const [key, value] of Object.entries(utmParams)) {
			if (value === '') {
				newURL.searchParams.delete(key)
			} else {
				newURL.searchParams.set(key, value)
			}
		}
		return newURL.toString()
	} catch (e) {
		return ''
	}
}

const paramsMetadata = [
	{ display: 'Referral (ref)', key: 'ref', examples: 'twitter, facebook' },
	{ display: 'UTM Source', key: 'utm_source', examples: 'twitter, facebook' },
	{ display: 'UTM Medium', key: 'utm_medium', examples: 'social, email' },
	{ display: 'UTM Campaign', key: 'utm_campaign', examples: 'summer_sale' },
	{ display: 'UTM Term', key: 'utm_term', examples: 'blue_shoes' },
	{ display: 'UTM Content', key: 'utm_content', examples: 'logolink' },
]

export function getUrlWithoutUTMParams(url: string) {
	try {
		const newURL = new URL(url)
		paramsMetadata.forEach((param, _) => newURL.searchParams.delete(param.key))
		return newURL.toString()
	} catch (e) {
		return url
	}
}
