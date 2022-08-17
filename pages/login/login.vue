<template>
	<view>
		<view class="login-back" @click="handleBack">
			<uni-icons type="back" size="20" color="#fff"></uni-icons>
		</view>
		<view class="login-bg"></view>
		<i-login v-if="status==='login'" @handleRegister="handleRegister"></i-login>
		<i-register v-else @handleLogin="handleLogin"></i-register>
	</view>
</template>

<script>
	import { navigateBack } from '@/utils/navigate'
	import UserModel from '@/model/userModel'
	export default {
		data() {
			return {
				status:'login'
			}
		},
		methods: {
			handleBack(){
				navigateBack()
			},
			handleRegister(){
				this.status='register'
			},
			handleLogin(){
				this.status='login'
			}
		}
	}
</script>

<style>
	.login-back{
		position: fixed;
		top: 0;
		left: 0;
		width: 102rpx;
		height: 102rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}
	.login-bg {
		height: 220rpx;
		background-image: linear-gradient(120deg, #3bfdaf, #70d6f2);
	}
</style>
