<template>
	<view>
		<block v-for="(item,index) in indexData" :key="index">
			<i-search-bar v-if="item.type==='search'"></i-search-bar>
			<i-swiper v-if="item.type==='swiper'" :data="item.data"></i-swiper>
			<i-icons v-if="item.type==='icons'" :data="item.data"></i-icons>
			<i-coupon v-if="item.type==='coupon'"></i-coupon>
			<!-- 拼团 -->
			<view v-if="item.type === 'promotion'">
				<i-active-list :type="item.listType">
					<template v-slot:divider>
						<view class="divider"></view>
					</template>
				</i-active-list>
			</view>
			<!-- 最新列表 -->
			<view v-if="item.type==='list'">
				<view class="divider"></view>
				<i-course-title :item="item"></i-course-title>
				<view>
					<i-course-list :type="item.listType" v-for="(childItem,index) in item.data" :key="index" :item="childItem"></i-course-list>
				</view>
			</view>
			<!-- 底部图片 -->
			<view v-if="item.type==='imageAd'">
				<view class="divider"></view>
				<image :src="item.data" mode="aspectFill" style="width: 750rpx;height: 360rpx;"></image>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexData:[],
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
						this.indexData=res.data.data
					}
				});
			},
		},
	}
</script>

<style>
	.divider {
		height: 14rpx;
		background-color: #f5f5f3;
	}
</style>
