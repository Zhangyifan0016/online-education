import Http from '@/utils/request.js'

class IndexModel extends Http{
	// 获取首页数据接口
	static getIndexData(){
		return Http.request({
			url : '/mobile/index',
		})
	}
	
	// 获取拼团数据
	static getGroup(query){
		return Http.request({
			url : '/mobile/group',
			data:{
				...query
			}
		})
	}
	
	// 获取优惠券数据
	static getCoupon(){
		return Http.request({
			url : '/mobile/coupon',
		})
	}
}

export default IndexModel