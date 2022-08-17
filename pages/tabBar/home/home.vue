<template>
	<view class="animate__animated animate__fadeInDown animate__faster">
		<view class="home-bg"></view>
		<view class="position-relative">
			<view class="flex p-3" @click="handleToLogin">
				<image style="width: 123rpx;height: 123rpx;" class="rounded-circle bg-light" src=""></image>
				<view class="flex flex-column pl-3 flex-1 text-white">
					<view class="font-md mb-2">立即登录</view>
					<view class="font-sm">登录解锁更多功能</view>
				</view>
			</view>
			<view class="p-3">
				<view class="flex bg-white shadow rounded">
					<view class="flex-1 flex flex-column align-center justify-center py-3">
						<text class="iconfont icon-order" style="font-size: 20px; color: rgb(254, 189, 0);"></text>
						<text class="font-sm mt-1 text-secondary">订单</text>
					</view>
					<view class="flex-1 flex flex-column align-center justify-center py-3">
						<text class="iconfont icon-message" style="font-size: 20px; color: rgb(254, 189, 0);"></text>
						<text class="font-sm mt-1 text-secondary">消息</text>
					</view>
					<view class="flex-1 flex flex-column align-center justify-center py-3">
						<text class="iconfont icon-star" style="font-size: 20px; color: rgb(254, 189, 0);"></text>
						<text class="font-sm mt-1 text-secondary">收藏</text>
					</view>
					<view class="flex-1 flex flex-column align-center justify-center py-3">
						<text class="iconfont icon-school" style="font-size: 20px; color: rgb(254, 189, 0);"></text>
						<text class="font-sm mt-1 text-secondary">在学</text>
					</view>
				</view>
			</view>
			<view class="px-3">
				<view class="uni-list uni-border-top-bottom">
					<view class="uni-list-item">
						<view class="uni-list-item__container container--right">
							<text class="iconfont icon-coupon mr-2" style="font-size: 20px; color: rgb(67, 150, 236);"></text>
							<view class="uni-list-item__content">
								<text class="uni-list-item__content-title">我的优惠券</text>
							</view>
						</view>
						<uni-icons color="#928E8A" type="right" size="16"></uni-icons>
					</view>
					<view class="uni-list-item">
						<view class="uni-list-item__container container--right">
							<text class="iconfont icon-question mr-2" style="font-size: 20px; color: rgb(67, 150, 236);"></text>
							<view class="uni-list-item__content">
								<text class="uni-list-item__content-title">常见问题</text>
							</view>
						</view>
						<uni-icons color="#928E8A" type="right" size="16"></uni-icons>
					</view>
					<view class="uni-list-item">
						<view class="uni-list-item__container container--right">
							<uni-icons class="mr-2" color="rgb(67, 150, 236)" type="gear" size="20"></uni-icons>
							<view class="uni-list-item__content">
								<text class="uni-list-item__content-title">设置</text>
							</view>
						</view>
						<uni-icons color="#928E8A" type="right" size="16"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script> 
import { navigateTo } from '@/utils/navigate'
	export default {
		data() {
			return {
	
			};
		},
		methods: {
			handleToLogin() {
				navigateTo('/pages/login/login')
			}
		},
	}
</script>
<style>
	.home-bg {
		width: 750rpx;
		height: 350rpx;
		background-color: #5CCC84;
		border-bottom-left-radius: 100rpx;
		border-bottom-right-radius: 100rpx;
		position: fixed;
		left: 0;
		right: 0;
	}
	.uni-list{
	    display: flex;
	    background-color: #fff;
	    position: relative;
	    flex-direction: column;
	}
	.uni-list-item{
		display: flex;
		font-size: 16px;
		position: relative;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		flex-direction: row;
		cursor: pointer;
	}
	.container--right{
	    padding-right: 0;
	}
	.uni-list-item__container{
	    position: relative;
	    display: flex;
	    flex-direction: row;
	    padding: 12px 15px;
	    padding-left: 15px;
	    flex: 1;
	    overflow: hidden;
	}
	.uni-list-item__content{
	    display: flex;
	    padding-right: 8px;
	    flex: 1;
	    color: #3b4144;
	    flex-direction: column;
	    justify-content: space-between;
	    overflow: hidden;
	}
</style>
