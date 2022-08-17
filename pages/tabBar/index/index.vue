<template>
	<view>
		<index-skeleton v-if="!loadingStatus"></index-skeleton>

		<view v-else class="animate__animated animate__fadeIn animate__fast">
			<block v-for="(item,index) in indexData" :key="index">
				<i-search-bar v-if="item.type==='search'" :placeholder="item.placeholder"></i-search-bar>
				<i-swiper v-if="item.type==='swiper'" :data="item.data"></i-swiper>
				<i-icons v-if="item.type==='icons'" :data="item.data"></i-icons>
				<i-coupon v-if="item.type==='coupon'" :data="couponData"></i-coupon>
				<!-- 拼团 // 秒杀 -->
				<view v-if="item.type === 'promotion'">
					<i-active-list :type="item.listType" :data="activityData">
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
						<i-course-list :type="item.listType" v-for="(childItem,index) in item.data" :key="index"
							:item="childItem"></i-course-list>
					</view>
				</view>
				<!-- 底部图片 -->
				<view v-if="item.type==='imageAd'">
					<view class="divider"></view>
					<image :src="item.data" mode="aspectFill" style="width: 750rpx;height: 360rpx;"></image>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import IndexModel from "@/model/indexModel"
	import indexSkeleton from './index-skeleton'
	export default {
		components: {
			indexSkeleton
		},
		data() {
			return {
				loadingStatus: false,
				indexData: [],
				activityData: [],
				couponData: [],
				query: {
					page: 1,
					usable: 1
				}
			};
		},
		onLoad() {
			this.loadRequest()
		},
		methods: {
			async loadRequest() {
				try {
					await this.getIndexData()
					await this.getCoupon()
					await this.getActivity()
					this.loadingStatus = true
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getIndexData() {
				const response = await IndexModel.getIndexData()
				this.indexData = response
			},
			async getCoupon() {
				const response = await IndexModel.getCoupon()
				this.couponData = response
			},
			async getActivity() {
				const type = this.indexData.filter(item => item.type === 'promotion')[0].listType
				const response = await IndexModel.getActivity(type, this.query)
				this.activityData = response.rows
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
