<template>
	<view class="scroll-row-item course" :class="'course-'+this.type">
		<view class="position-relative">
			<image :src="item.cover"></image>
			<view class="text-white font-sm">{{ item.type | fliterGroupType }}</view>
		</view>
		<view class="flex flex-column flex-shrink">
			<text class="text-ellipsis font-md">{{item.title}}</text>
			<view class="flex flex-1 align-end">
				<text class="font-md text-danger">￥{{item.price}}</text>
				<text class="font-sm text-light-muted">￥{{item.t_price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { courseType } from "@/enum/course-type"
	export default {
		name: "i-course-list",
		props:{
			item:{
				type:Object,
				default:()=>{}
			},
			type:{
				type:String,
			}
		},
		data() {
			return {

			};
		},
		filters: {
			fliterGroupType(type) {
				return courseType[type]
			}
		}
	}
</script>

<style>
	.course-group{
		width: 340rpx;
		margin-left: 20rpx;
		margin-bottom: 20rpx;
	}
	.course-group>view:last-child>text:first-child{
		margin-top: 10rpx;
	}
	.course-group>view:first-child{
		width: 340rpx;
		height: 190rpx;
	} 
	.course-group image{
		width: 340rpx;
		height: 190rpx;
	}
	.course-one{
		display: flex!important;
		padding: 20rpx;
	}
	.course-one>view:first-child{
		margin-right: 20rpx;
		width: 300rpx;
		height: 170rpx;
		flex-shrink: 1;
	}
	.course-one image{
		width: 300rpx;
		height: 170rpx;
		flex-shrink: 1;
	}
	.course-one>view:last-child{
		width: 395rpx;
	}
	.course>view:first-child>view{
		position: absolute;
		right: 10rpx;
		bottom: 10rpx;
		background-color: rgba(0,0,0,0.4);
		padding: 0 10rpx;
	}
</style>
