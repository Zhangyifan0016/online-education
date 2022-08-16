<template>
	<view class="p-2">
		<scroll-view class="scroll-row" scroll-x="true">
			<view class="coupon mr-2">
				<view class="flex flex-column align-center justify-center p-2" style="background-color: #d39e00;">
					<text class="font-md">
						￥4.00
					</text>
					<text class="font-sm">适用课程：中级经济法-知识点精讲课</text>
				</view>
				<view class="flex align-center justify-center font">领取</view>
			</view>
			<view class="coupon mr-2">
				<view class="flex flex-column align-center justify-center p-2" style="background-color: #d39e00;">
					<text class="font-md">
						￥4.00
					</text>
					<text class="font-sm">
						适用课程：中级经济法-知识点精讲课
					</text>
				</view>
				<view class="flex align-center justify-center font">领取</view>
			</view>
			<view class="coupon mr-2">
				<view class="flex flex-column align-center justify-center p-2" style="background-color: #d39e00;">
					<text class="font-md">
						￥4.00
					</text>
					<text class="font-sm">
						适用课程：中级经济法-知识点精讲课
					</text>
				</view>
				<view class="flex align-center justify-center font">领取</view>
			</view>
			<view class="coupon mr-2">
				<view class="flex flex-column align-center justify-center p-2" style="background-color: #d39e00;">
					<text class="font-md">
						￥4.00
					</text>
					<text class="font-sm">
						适用课程：中级经济法-知识点精讲课
					</text>
				</view>
				<view class="flex align-center justify-center font">领取</view>
			</view>
			<view class="coupon mr-2">
				<view class="flex flex-column align-center justify-center p-2" style="background-color: #d39e00;">
					<text class="font-md">
						￥4.00
					</text>
					<text class="font-sm">
						适用课程：中级经济法-知识点精讲课
					</text>
				</view>
				<view class="flex align-center justify-center font">领取</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"i-coupon",
		data() {
			return {
				
			};
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