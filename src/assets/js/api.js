import axios from './request'

export default {
	getCsrfToken() {
		return axios.get('getCsrfToken')
	},

	saleEdit(config) {
		return axios.post('api/add', qs.stringify(config))
	},

	categories(params) {
		return axios.get('/common/list/categories', params)
	}
}
