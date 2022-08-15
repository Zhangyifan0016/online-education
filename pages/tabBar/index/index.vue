<template>
	<view>
		<i-search-bar></i-search-bar>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 310rpx;">
			<swiper-item class="flex justify-center" v-for="(item,index) in bannerData" :key="index">
				<image :src="item.src" mode="aspectFill" style="width: 720rpx;height: 300rpx;" class="rounded shadow">
				</image>
			</swiper-item>
		</swiper>
		<view class="flex flex-wrap py-2">
			<view style="width: 25%;" class="flex flex-column align-center justify-center py-1"
				v-for="(item,index) in iconsData" :key="index">
				<image style="width: 72rpx; height: 72rpx; border-radius: 100%;" :src="item.src" mode=""></image>
				<text class="font-sm text-muted mt-1">{{item.name}}</text>
			</view>
		</view>
		<view class="p-2">
			<scroll-view class="scroll-row" scroll-x="true">
				<div class="uni-scroll-view">
					<div class="uni-scroll-view" style="overflow: auto hidden;">
						<div class="uni-scroll-view-content">
							<view class="coupon mr-2">
								<view class="flex flex-column align-center justify-center p-2"
									style="background-color: #d39e00;">
									<text class="font-md">
										<span>￥4.00</span>
									</text>
									<text class="font-sm">
										<span>适用课程：中级经济法-知识点精讲课</span>
									</text>
								</view>
								<view class="flex align-center justify-center font">领取</view>
							</view>
							<view class="coupon mr-2">
								<view class="flex flex-column align-center justify-center p-2"
									style="background-color: #d39e00;">
									<text class="font-md">
										<span>￥4.00</span>
									</text>
									<text class="font-sm">
										<span>适用课程：中级经济法-知识点精讲课</span>
									</text>
								</view>
								<view class="flex align-center justify-center font">领取</view>
							</view>
							<view class="coupon mr-2">
								<view class="flex flex-column align-center justify-center p-2"
									style="background-color: #d39e00;">
									<text class="font-md">
										<span>￥4.00</span>
									</text>
									<text class="font-sm">
										<span>适用课程：中级经济法-知识点精讲课</span>
									</text>
								</view>
								<view class="flex align-center justify-center font">领取</view>
							</view>
							<view class="coupon mr-2">
								<view class="flex flex-column align-center justify-center p-2"
									style="background-color: #d39e00;">
									<text class="font-md">
										<span>￥4.00</span>
									</text>
									<text class="font-sm">
										<span>适用课程：中级经济法-知识点精讲课</span>
									</text>
								</view>
								<view class="flex align-center justify-center font">领取</view>
							</view>
							<view class="coupon mr-2">
								<view class="flex flex-column align-center justify-center p-2"
									style="background-color: #d39e00;">
									<text class="font-md">
										<span>￥4.00</span>
									</text>
									<text class="font-sm">
										<span>适用课程：中级经济法-知识点精讲课</span>
									</text>
								</view>
								<view class="flex align-center justify-center font">领取</view>
							</view>
						</div>
					</div>
				</div>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerData: [],
				iconsData: []
			};
		},
		onLoad() {
			this.getIndexData()
		},
		methods: {
			getIndexData() {
				uni.request({
					url: 'http://demonuxtapi.dishait.cn/mobile/index',
					data: {},
					header: {
						'appid': 'bd9d01ecc75dbbaaefce'
					},
					success: (res) => {
						console.log(res)
						this.bannerData = res.data.data[1].data
						this.iconsData = res.data.data[2].data
					}
				});
			},
		},
	}
</script>

<style>
	.scroll-row {
		white-space: nowrap;
		width: 100%;
	}

	.uni-scroll-view {
		width: 100%;
		height: 100%;
		position: relative;
		-webkit-overflow-scrolling: touch;
	}

	.uni-scroll-view-content {
		width: 100%;
		height: 100%;
	}

	.coupon {
		display: inline-flex;
		color: white;
	}

	.coupon>view:first-child {
		border-right: 5rpx dashed;
	}

	.coupon>view:last-child {
		width: 130rpx;
		background-color: #ffc107;
	}
</style>
