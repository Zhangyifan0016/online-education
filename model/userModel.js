import Http from '@/utils/request.js'

class UserModel extends Http{
	static login(data){
		return Http.request({
			url : '/mobile/login',
			method:'POST',
			data
		})
	}
	static register(data){
		return Http.request({
			url : '/mobile/reg',
			method:'POST',
			data
		})
	}
}

export default UserModel