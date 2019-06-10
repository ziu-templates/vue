import * as muType from './mutations_type';
export default {
	[muType.INIT] (state, data) {
		state.hasInit = data;
	}
};
