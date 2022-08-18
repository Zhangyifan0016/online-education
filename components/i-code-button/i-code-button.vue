<template>
	<button class="code-btn bg-main" @click="handleSend">
		{{time > 0 ? (time + 's') : '发送'}}
	</button>
</template>

<script>
	import UserModel from '@/model/userModel'
	export default {
		name: "i-code-button",
		props: {
			phone: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				time: 0
			};
		},
		methods: {
			async handleSend() {
				if (this.time > 0) {
					return
				}
				uni.showLoading()
				try {
					const data = {
						phone: this.phone
					}
					const response = await UserModel.userGetCaptcha(data)
					uni.showToast({
						title: '验证码' + response,
						icon: "none"
					})
					this.handleCountDown()
				} catch (e) {
					console.log(e)
				} finally {
					uni.hideLoading()
				}
			},
			// 倒计时
			handleCountDown() {
				this.time = 60
				let timer = setInterval(() => {
					this.time--
					if (this.time <= 0) {
						clearInterval(timer)
					}
				}, 1000)
			}
		}
	}
</script>

<style>
	.code-btn {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 200rpx;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
</style>
