<template>
	<view class="flex align-center justify-between py-3 px-2">
		<text class="font-md font-weight-bold">
			<slot v-if="item.title">{{item.title}}</slot>
		</text>
		<text v-if="item.showMore" class="font-sm text-light-muted">查看更多</text>
	</view>
</template>

<script>
	export default {
		name: "i-course-title",
		props: {
			item: {
				type: Object
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
