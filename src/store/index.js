import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	// num: 0,
	SelectedCity: "西安",
	MoreCitiesInitial: "A",
	MoreCitiesContent: [],
	RecentlyVisited: [
		{
			name: "杭州"
		},
		{
			name: "武汉"
		},
		{
			name: "深圳"
		},
		{
			name: "北京"
		},
		{
			name: "上海"
		},
		{
			name: "西安"
		}
	],
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})