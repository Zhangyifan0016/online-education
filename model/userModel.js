import Http from '@/utils/request.js'

class UserModel extends Http{
	static userLogin(data){
		return Http.request({
			url : '/mobile/login',
			method:'POST',
			data
		})
	}
	static userRegister(data){
		return Http.request({
			url : '/mobile/reg',
			method:'POST',
			data
		})
	}
	static userGetCaptcha(data){
		return Http.request({
			url : '/mobile/get_captcha',
			method:'POST',
			data
		})
	}
	static userBindPhone(data){
		return Http.request({
			url : '/mobile/bind_mobile',
			method:'POST',
			data
		})
	}
}

export default UserModel