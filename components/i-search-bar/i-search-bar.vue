<template>
	<view class="p-2">
		<view style="background-color: #F5F5F1;color: #928E8A;" class="flex align-center justify-center py-2 rounded">
			<uni-icons color="#928E8A" type="search" size="20"></uni-icons>
			<text class="ml-2">{{placeholder}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"i-search-bar",
		props:{
			placeholder:{
				type:String,
				default:''
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