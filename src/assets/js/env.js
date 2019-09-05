/*
 * baseURL API接口地址
 */
let baseURL

if (process.env.NODE_ENV === 'production') {
	baseUrl = 'production'
} else if (process.env.NODE_ENV === 'development') {
	baseURL = 'development'
} else {
	baseURL = 'http://localhost:3000'
}

export default {
	baseURL
}
