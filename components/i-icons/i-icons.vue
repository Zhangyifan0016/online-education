<template>
	<view class="flex flex-wrap py-2">
		<view style="width: 25%;" class="flex flex-column align-center justify-center py-1"
			v-for="(item,index) in data" :key="index">
			<image style="width: 72rpx; height: 72rpx; border-radius: 100%;" :src="item.src" mode=""></image>
			<text class="font-sm text-muted mt-1">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"i-icons",
		props:{
			data:{
				type:Array,
				default:()=>[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>