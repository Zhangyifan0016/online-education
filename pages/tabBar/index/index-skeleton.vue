<template>
	<view>
		<view class="p-2">
			<i-skeleton width="710rpx" height="75rpx" oClass="mb-2 rounded"></i-skeleton>
			<i-skeleton width="710rpx" height="300rpx" oClass="rounded"></i-skeleton>
		</view>
		<view class="flex flex-wrap py-2">
			<view class="flex flex-column align-center justify-center" style="width: 25%;" v-for="i in 8" :key="i">
				<i-skeleton width="75rpx" height="75rpx" circle oClass="mb-2"></i-skeleton>
				<i-skeleton width="75rpx" height="30rpx" oClass="mb-2"></i-skeleton>
			</view>
		</view>
		<view class="flex flex-wrap py-2">
			<view class="flex align-center justify-center" style="width: 50%;">
				<i-skeleton width="354rpx" height="130rpx" oClass="mb-2"></i-skeleton>
			</view>
			<view class="flex align-center justify-center" style="width: 50%;">
				<i-skeleton width="354rpx" height="130rpx" oClass="mb-2"></i-skeleton>
			</view>
		</view>
		<view class="p-2">
			<i-skeleton width="70rpx" height="35rpx"></i-skeleton>
		</view>
		<view class="flex p-2">
			<i-skeleton width="300rpx" height="170rpx"></i-skeleton>
			<view class="ml-2">
				<i-skeleton width="364rpx" height="38rpx" oClass="mb-2"></i-skeleton>
				<i-skeleton width="120rpx" height="25rpx" oClass="mb-2"></i-skeleton>
				<i-skeleton width="170rpx" height="43rpx"></i-skeleton>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
