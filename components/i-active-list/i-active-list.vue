<template>
	<view>
		<slot name="divider"></slot>
		<view class="flex align-center py-3 px-2">
			<text class="font-md font-weight-bold">{{ type === 'group' ? '拼团' : '秒杀' }}</text>
		</view>
		<scroll-view scroll-x="true" class="scroll-row">
			<i-course-list v-for="(item,index) in data" :key="index" :item="item"></i-course-list>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "i-active-list",
		props: {
			type: {
				type: String,
				default: 'group'
			},
			data:{
				type:Array,
				default:()=>[]
			}
		},
		data() {
			return {
				
			};
		},
		created() {
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
