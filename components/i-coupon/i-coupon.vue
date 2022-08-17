<template>
	<view class="p-2">
		<scroll-view class="scroll-row" scroll-x="true">
			<view class="coupon mr-2" v-for="(item,index) in data" :key="index">
				<view class="flex flex-column align-center justify-center p-2" style="background-color: #d39e00;">
					<text class="font-md">
						￥{{item.price}}
					</text>
					<text class="font-sm">
						适用{{item.type | fliterGroupType}}：{{item.value.title}}
					</text>
				</view>
				<view class="flex align-center justify-center font">领取</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { courseType } from "@/enum/course-type"
	export default {
		name:"i-coupon",
		props:{
			data:{
				type:Array,
				default:()=>[]
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
	.coupon {
		min-width: 315rpx;
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