import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

import createLogger from 'vuex/dist/logger';

// Vue.use(Vuex);
let dubug = process.env.NODE_ENV !== 'production';
/* eslint-disable no-new */
let store = new Vuex.Store({
	strict: dubug,
	plugins: dubug ? [createLogger()] : [],
	state,
	mutations,
	actions,
	getters
});
export default store;
