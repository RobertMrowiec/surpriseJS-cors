module.exports = (allowedOrigins, headers = undefined) => {
	const set = new Set(Array.isArray(allowedOrigins) ? allowedOrigins : [allowedOrigins]);

	return (request, response, next) => {
		const allowedMethods = 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH'
		const allowedHeaders = headers ? headers : 'X-Requested-With, Content-Type, Accept, Content-Language, Accept-Language, Authorization'
		const origin = request.headers.origin

		if (set.has(origin)) response.setHeader('Access-Control-Allow-Origin', origin)
		response.setHeader("Access-Control-Allow-Credentials", true)
		response.setHeader("Access-Control-Allow-Headers", allowedHeaders)
		response.setHeader('Access-Control-Allow-Methods', allowedMethods)

		return request.method === 'OPTIONS' ? response.send() : next()
	}
}

