//vuex 状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		historyList:[]
	},
	mutations: {
		SET_HISTOREY_LIST(state, history) {
			state.historyList = history
		}
	},
	actions: {
		set_history({commit, state}, history) {
			commit('SET_HISTOREY_LIST', history)
		}
	}
})

export default store