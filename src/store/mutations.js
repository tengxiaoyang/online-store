// const ADD_NUM = 'ADD_NUM'
const set_selected_city = 'set_selected_city';
const set_more_cities_initial = 'set_more_cities_initial';
const set_more_cities_content = 'set_more_cities_content';

export default {
	//点击进入下一题
	// [ADD_NUM](state, num) {
	// 	state.num += num;
	// }
	[set_selected_city](state, e) {
		state.SelectedCity = e;
	},
	[set_more_cities_initial](state, e) {
		state.MoreCitiesInitial = e;
	},
	[set_more_cities_content](state, e) {
		state.MoreCitiesContent = e;
	},
}