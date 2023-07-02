export const errorCatch = (error: any): string => {
	return error.response && error.response.data
		? typeof error.response.data.message === 'string'
			? error.response.data.message
			: error.response.data.message[0]
		: error.message
}

export const getContentType = () => ({ 'Content-Type': 'application/json' })
