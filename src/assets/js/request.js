import axios from 'axios'
import store from '../../store/createStore.index'
import { baseURL } from './env'

axios.defaults.baseURL = baseURL

axios.interceptors.request.use(
	config => {
		// 这里可以让loading显示，loading状态store管理
		// 从用户信息里取到token  请求头统一增加 token 和 sessionId
		if (store.user.auth) {
			const { token, sessionId } = store.user.auth
			config.headers = {
				...config.headers,
				'X-CSRF-TOKEN': token,
				'x-auth-token': sessionId
			}
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response => {
		// 这里让loading隐藏
		// 对返回做处理 例如：拿到登录失效就跳转路由到登录页
		// if (403) {
		// 	return history.router.push({ name: 'login' })
		// }
		return response
	},
	error => {
		// 对错误响应做处理
		return Promise.reject(error)
	}
)

export default axios
