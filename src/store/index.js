import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	// num: 0,
	SelectedCity: "西安"
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})