<template>
	<view class="register">
		<view class="flex">
			<text class="registerTitle">注 册</text>
		</view>
		<uni-forms>
			<uni-forms-item name="username">
				<view class="register-form flex align-center">
					<uni-icons color="#333333" type="person" size="16"></uni-icons>
					<input class="font-md" type="text" placeholder="请输入用户名" />
				</view>
			</uni-forms-item>
			<uni-forms-item name="password">
				<view class="register-form flex align-center">
					<uni-icons color="#333333" type="locked" size="16"></uni-icons>
					<input class="font-md" type="password" placeholder="请输入密码" />
				</view>
			</uni-forms-item>
			<uni-forms-item name="confirmPassword">
				<view class="register-form flex align-center">
					<uni-icons color="#333333" type="locked" size="16"></uni-icons>
					<input class="font-md" type="password" placeholder="请输入确认密码" />
				</view>
			</uni-forms-item>
			<uni-forms-item>
				<button class="rounded bg-main" style="color: white;">注 册</button>
			</uni-forms-item>
		</uni-forms>
		<view class="flex align-center justify-between mb-3 font">
			<text class="py-3 text-main" @click="handleLogin">去登录</text>
			<text class="py-3 text-light-muted">忘记密码？</text>
		</view>
		<view class="flex align-center justify-center">
			<uni-icons custom-prefix="iconfont" type="icon-weixin" size="25" color="#5ccc84"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name:"i-login",
		data() {
			return {
				
			};
		},
		methods:{
			handleLogin(){
				this.$emit('handleLogin')
			}
		}
	}
</script>

<style>
	.register {
		position: absolute;
		top: 200rpx;
		left: 0;
		right: 0;
		background-color: #fff;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		padding: 62rpx 72rpx 0 72rpx;
	}
	.registerTitle{
		font-size: 45rpx;
		margin-bottom: 70rpx;
		color: #35404b;
	}
	
	.register-form{
		height: 100rpx;
		background-color: #f5f5f5;
	}
	.uni-icons{
		display: flex;
		width: 100rpx;
		height: 100rpx;
		align-items: center;
		justify-content: center;
	}
</style>