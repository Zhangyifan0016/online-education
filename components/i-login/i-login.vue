<template>
	<view class="login">
		<view class="flex">
			<text class="loginTitle">登 录</text>
		</view>
		<uni-forms>
			<uni-forms-item name="username">
				<view class="login-form flex align-center">
					<uni-icons color="#333333" type="person" size="16"></uni-icons>
					<input v-model="loginForm.username" class="font-md" type="text" placeholder="请输入用户名" />
				</view>
			</uni-forms-item>
			<uni-forms-item name="password">
				<view class="login-form flex align-center">
					<uni-icons color="#333333" type="locked" size="16"></uni-icons>
					<input v-model="loginForm.password" class="font-md" type="password" placeholder="请输入密码" />
				</view>
			</uni-forms-item>
			<uni-forms-item>
				<button class="rounded bg-main" style="color: white;" @click="handleLogin">登 录</button>
			</uni-forms-item>
		</uni-forms>
		<view class="flex align-center justify-between mb-3 font">
			<text class="py-3 text-main" @click="handleRegister">注册账号</text>
			<text class="py-3 text-light-muted">忘记密码？</text>
		</view>
		<view class="flex align-center justify-center">
			<uni-icons custom-prefix="iconfont" type="icon-weixin" size="25" color="#5ccc84"></uni-icons>
		</view>
		<checkbox-group class="flex align-center justify-center mt-4">
				<label class="text-light-muted">
					<checkbox/><text>已阅读并同意用户协议&隐私声明</text>
				</label>
		</checkbox-group>
	</view>
</template>

<script>
	import UserModel from '@/model/userModel'
	export default {
		name:"i-login",
		data() {
			return {
				loginForm:{
					username:'',
					password:''
				}
			};
		},
		methods:{
			handleRegister(){
				this.$emit('handleRegister')
			},
			async handleLogin(){
				const response = await UserModel.login(this.loginForm)
				console.log(response);
			}
		}
	}
</script>

<style>
	.login {
		position: absolute;
		top: 200rpx;
		left: 0;
		right: 0;
		background-color: #fff;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		padding: 62rpx 72rpx 0 72rpx;
	}
	.loginTitle{
		font-size: 45rpx;
		margin-bottom: 70rpx;
		color: #35404b;
	}
	
	.login-form{
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