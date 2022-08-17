import Http from '@/utils/request.js'

class IndexModel extends Http{
	// 获取首页数据接口
	static getIndexData(){
		return Http.request({
			url : '/mobile/index',
		})
	}
	
	// 获取拼团 / 秒杀数据
	static getActivity(type,query){
		return Http.request({
			url : '/mobile/'+type,
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