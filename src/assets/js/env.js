/*
 * baseURL API接口地址
 */
let baseURL

if (process.env.REACT_APP_ENV === 'production') {
	baseUrl = 'production'
} else if (process.env.REACT_APP_ENV === 'development') {
	baseURL = 'development'
} else {
	baseURL = 'http://localhost:3000'
}

export default {
	baseURL
}
