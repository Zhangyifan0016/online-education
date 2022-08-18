import APIConfig from "@/config/config"
import exceptionMessage from "@/config/exception-message"
import store from '@/store/index'
class Http {
	// 请求拦截器
	static async beforeRequest(config) {
		config.url = APIConfig.baseURL + config.url
		const token = store.state.user.token
		if(token) config.header.token = token
		config.header.appid = APIConfig.appid
	
		return config
	}
	
	// 请求
	static async request({url,method = 'GET',data = {},header = {},...options}) {
		const config = await Http.beforeRequest({url,method,data,header,...options})
		const response = await uni.request(config)
		return await Http.beforeResponse(response)
	}
	
	// 响应拦截器
	static async beforeResponse(response){
		const [error, res] = response
		// 请求失败
		if(res.statusCode !== 200 || res.data.msg === 'fail'){
			Http._showError(res.statusCode,res.data.data)
		}
		return res.data.data
	}
	
	// 错误信息处理
	static _showError(code,msg){
		let title = ""
		title = exceptionMessage[code] || msg || '发生未知错误'
		uni.showToast({
			title,
			icon : 'none',
			duration : 3000
		})
	}
}

export default Http
