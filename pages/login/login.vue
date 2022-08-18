<template>
	<view>
		<view class="login-back" @click="handleBack">
			<uni-icons type="back" size="20" color="#fff"></uni-icons>
		</view>
		<view class="login-bg"></view>
		<view class="login">
			<view class="flex">
				<text class="loginTitle">{{type === 'login' ? '登 录' : '注 册'}}</text>
			</view>
			<uni-forms>
				<uni-forms-item name="username">
					<view class="login-form flex align-center">
						<uni-icons color="#333333" type="person" size="16"></uni-icons>
						<input v-model="form.username" class="font-md" type="text" placeholder="请输入用户名" />
					</view>
				</uni-forms-item>
				<uni-forms-item name="password">
					<view class="login-form flex align-center">
						<uni-icons color="#333333" type="locked" size="16"></uni-icons>
						<input v-model="form.password" class="font-md" type="password" placeholder="请输入密码" />
					</view>
				</uni-forms-item>
				<uni-forms-item v-if="type==='register'" name="confirmPassword">
					<view class="login-form flex align-center">
						<uni-icons color="#333333" type="locked" size="16"></uni-icons>
						<input v-model="form.repassword" class="font-md" type="password" placeholder="请输入确认密码" />
					</view>
				</uni-forms-item>
				<uni-forms-item>
					<button class="rounded bg-main" style="color: white;"
						@click="handleSubmit">{{type === 'login' ? '登 录' : '注 册'}}</button>
				</uni-forms-item>
			</uni-forms>
			<view class="flex align-center justify-between mb-3 font">
				<text class="py-3 text-main" @click="handleToggle">{{type === 'login' ? '注册账号' : '去登录'}}</text>
				<text class="py-3 text-light-muted">忘记密码？</text>
			</view>
			<view class="flex align-center justify-center weChat">
				<uni-icons type="weixin" size="25" color="#5ccc84"></uni-icons>
			</view>
			<checkbox-group v-if="type==='login'" @change="handleCheck" class="flex align-center justify-center mt-4">
				<label class="text-light-muted">
					<checkbox :checked="status" style="transform: scale(0.7);" /><text
						class="font">已阅读并同意用户协议&隐私声明</text>
				</label>
			</checkbox-group>
		</view>
	</view>
</template>

<script>
	import UserModel from '@/model/userModel'
	import {navigateBack,redirectTo} from '@/utils/navigate'
	export default {
		data() {
			return {
				type: 'login',
				status: false,
				form: {
					username: '',
					password: '',
					repassword: ''
				}
			}
		},
		methods: {
			handleBack() {
				navigateBack()
			},
			handleToggle() {
				this.type = this.type === 'login' ? 'register' : 'login'
			},
			handleSubmit() {
				uni.showLoading({title: '提交中...',mask: false})
				this.type === 'login' ? this.handleLogin() : this.handleRegister()
			},
			async handleLogin() {
				if (!this.status) {
					return uni.showToast({
						title: '请先阅读并同意用户协议&隐私声明',
						icon: "none"
					})
				}
				try{
					const data = this.lodash.cloneDeep(this.form)
					delete data.repassword
					const response = await UserModel.userLogin(data)
					this.resetForm()
					this.status=false
					this.$store.dispatch("setUser", response)
					this.handleToBindPhone()
					this.handleBack()
				}catch(e){
					console.log(e);
				}finally{
					uni.hideLoading()
				}
			},
			async handleRegister() {
				try{
					const data = this.lodash.cloneDeep(this.form)
					const response = await UserModel.userRegister(data)
					uni.showToast({title : '注册成功', icon : 'none'})
					this.type = 'login'
					this.resetForm()
				}catch(e){
					console.log(e);
				}finally{
					uni.hideLoading()
				}
			},
			handleToBindPhone(){
				const user = this.$store.state.user
				if(!user.phone){
					redirectTo("/pages/bind-phone/bind-phone")
				}
				return
			},
			// 重置表单
			resetForm() {
				this.form = {
					username: '',
					password: '',
					repassword: ''
				}
			},
			// 获取选中状态
			handleCheck(event) {
				this.status = Boolean(event.detail.value.length)
			}
		}
	}
</script>

<style>
	.login-back {
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

	.loginTitle {
		font-size: 45rpx;
		margin-bottom: 70rpx;
		color: #35404b;
	}

	.login-form {
		height: 100rpx;
		background-color: #f5f5f5;
	}

	.login-form .uni-icons {
		display: flex;
		width: 100rpx;
		height: 100rpx;
		align-items: center;
		justify-content: center;
	}

	.weChat .uni-icons {
		border: 1px solid #5ccc84;
		width: 47px;
		border-radius: 100%;
		height: 47px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
