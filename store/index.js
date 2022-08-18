// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //vue的插件机制
import Storage from '@/utils/storage'
//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: {
		user: Storage.get('user')||{}
	},
	getters: {

	},
	mutations: {
		setUser(state, user) {
			state.user = user
			Storage.set('user',user)
		}
	},
	actions: {
		setUser({commit},payload)	{
			commit("setUser", payload)
		}
	},
	modules: {

	}
})
export default store
