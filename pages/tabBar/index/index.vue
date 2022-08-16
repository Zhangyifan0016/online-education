<template>
	<view>
		<i-search-bar></i-search-bar>
		<i-swiper :data="bannerData"></i-swiper>
		<i-icons :data="iconsData"></i-icons>
		<i-coupon></i-coupon>
		<view>
			<view>
				<view class="divider"></view>
				<view class="flex align-center py-3 px-2">
					<text class="font-md font-weight-bold">拼团</text>
				</view>
				<scroll-view scroll-x="true" class="scroll-row">
					<view class="ml-2 mb-2 course-one scroll-row-item" v-for="(item,index) in groupData" :key="index">
						<view class="position-relative">
							<image :src="item.cover" mode=""></image>
						</view>
						<view class="flex flex-column flex-shrink">
							<text class="text-ellipsis font-md mt-1">{{item.title}}</text>
							<view class="flex flex-1 align-end">
								<text class="font-md text-danger">￥{{item.price}}</text>
								<text class="font-sm text-light-muted">￥{{item.t_price}}</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view>
			<view class="divider"></view>
			<view class="flex align-center justify-between py-3 px-2">
				<text class="font-md font-weight-bold">{{newListTitle}}</text>
				<text class="font-sm text-light-muted">查看更多</text>
			</view>
			<view>
				<view class="course-two scroll-row-item p-2 flex" v-for="(item,index) in newListData" :key="index">
					<view class="position-relative mr-2">
						<image :src="item.cover"></image>
					</view>
					<view class="flex flex-column flex-shrink">
						<text class="text-ellipsis font-md">{{item.title}}</text>
						<view class="flex flex-1 align-end">
							<text class="font-md text-danger">￥{{item.price}}</text>
							<text class="font-sm text-light-muted">￥{{item.t_price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class="divider"></view>
			<image :src="lastImage" mode="aspectFill" style="width: 750rpx;height: 360rpx;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerData: [],
				iconsData: [],
				groupData: [],
				newListTitle:'',
				newListData:[],
				lastImage:'',
				query: {
					page: 1,
					usable: 1
				}
			};
		},
		onLoad() {
			this.getIndexData()
			this.getGroup()
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
						this.newListTitle=res.data.data[5].title
						this.newListData=res.data.data[5].data
						this.lastImage=res.data.data[6].data
					}
				});
			},
			getGroup() {
				uni.request({
					url: 'http://demonuxtapi.dishait.cn/mobile/group',
					data: {
						...this.query
					},
					header: {
						'appid': 'bd9d01ecc75dbbaaefce'
					},
					success: (res) => {
						console.log(res)
						this.groupData = res.data.data.rows
					}
				});
			}
		},
	}
</script>

<style>
	.divider {
		height: 14rpx;
		background-color: #f5f5f3;
	}
	.course-one{
		width: 340rpx;
	}
	.course-one>view:first-child{
		width: 340rpx;
		height: 190rpx;
	}
	.course-one image{
		width: 340rpx;
		height: 190rpx;
	}
	.course-two>view:first-child{
		width: 300rpx;
		height: 170rpx;
		flex-shrink: 1;
	}
	.course-two image{
		width: 300rpx;
		height: 170rpx;
		flex-shrink: 1;
	}
	.course-two>view:last-child{
		width: 395rpx;
	}
</style>
