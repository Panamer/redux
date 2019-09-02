// constants action类型
export const BRID = 'REMOVE';

// action creator
export function bridSta(state) {
	return {
		type: BRID,
		payload: state.windData,
	};
}

// 初始化状态
const initialState = {
	windData: 20,
};

// reducer (actions handlers)
export function windReducer(state = initialState, action) {
	switch (action.type) {
	case 'ADD':
		return {
			...state, windData: state.windData * 2,
		};
	case 'REMOVE':
		return {
			...state, windData: state.windData - 1,
		};
	default:
		return state;
	}
}
