<template>
	<view>
		<slot name="divider"></slot>
		<view class="flex align-center py-3 px-2">
			<text class="font-md font-weight-bold">拼团</text>
		</view>
		<scroll-view scroll-x="true" class="scroll-row">
			<i-course-list :type="type" v-for="(item,index) in groupData" :key="index" :item="item"></i-course-list>
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
		},
		data() {
			return {
				groupData: [],
				query: {
					page: 1,
					usable: 1
				}
			};
		},
		created() {
			this.getGroup()
		},
		methods: {
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
						this.groupData = res.data.data.rows
					}
				});
			}
		}
	}
</script>

<style>

</style>
