// const ADD_NUM = 'ADD_NUM'
const set_selected_city = 'set_selected_city';

export default {
	//点击进入下一题
	// [ADD_NUM](state, num) {
	// 	state.num += num;
	// }
	[set_selected_city](state, e) {
		state.SelectedCity = e;
	},
}