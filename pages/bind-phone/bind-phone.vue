<template>
	<view>
		<view class="phone-back" @click="handleBack">
			<uni-icons type="back" size="20" color="#fff"></uni-icons>
		</view>
		<view class="phone-bg"></view>
		<view class="phone">
			<view class="flex">
				<text class="phoneTitle">绑定手机号</text>
			</view>
			<uni-forms>
				<uni-forms-item name="username">
					<view class="phone-form flex align-center">
						<uni-icons color="#333333" type="person" size="16"></uni-icons>
						<input v-model="form.phone" class="font-md" type="text" placeholder="请输入手机号" />
					</view>
				</uni-forms-item>
				<uni-forms-item name="password">
					<view class="phone-form flex align-center">
						<uni-icons color="#333333" type="locked" size="16"></uni-icons>
						<input v-model="form.code" class="font-md" type="text" placeholder="验证码" />
						<i-code-button :phone="form.phone"></i-code-button>
					</view>
				</uni-forms-item>
				<uni-forms-item>
					<button class="rounded bg-main" style="color: white;" @click="handleBind">绑定</button>
				</uni-forms-item>
			</uni-forms>
		</view>
	</view>
</template>

<script>
	import UserModel from '@/model/userModel'
	import {
		switchTab
	} from '@/utils/navigate'
	export default {
		data() {
			return {
				form: {
					phone: '',
					code: ''
				}
			}
		},
		methods: {
			handleBack() {
				switchTab('/pages/tabBar/home/home')
			},
			async handleBind() {
				uni.showLoading({
					title: '提交中...',
					mask: false
				})
				try {
					const response = await UserModel.userBindPhone(this.form)
					uni.showToast({
						title: "绑定成功",
						icon: "none"
					})

					this.resetForm()
					
					setTimeout(() => {
						this.handleBack()
					}, 350)

				} catch (err) {
					console.log(err)
				} finally {
					uni.hideLoading()
				}
			},
			resetForm() {
				this.form = {
					phone: '',
					code: ''
				}
			}
		}
	}
</script>

<style>
	.phone-back {
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

	.phone-bg {
		height: 220rpx;
		background-image: linear-gradient(120deg, #3bfdaf, #70d6f2);
	}

	.phone {
		position: absolute;
		top: 200rpx;
		left: 0;
		right: 0;
		background-color: #fff;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		padding: 62rpx 72rpx 0 72rpx;
	}

	.phoneTitle {
		font-size: 45rpx;
		margin-bottom: 70rpx;
		color: #35404b;
	}

	.phone-form {
		height: 100rpx;
		background-color: #f5f5f5;
	}

	.phone-form .uni-icons {
		display: flex;
		width: 100rpx;
		height: 100rpx;
		align-items: center;
		justify-content: center;
	}
</style>
