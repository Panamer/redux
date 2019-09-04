// constants action类型
const ADDROAD = 'ADDROAD'

// action creator 必须有一个type字段来标识这个行为的类型
export function addRoad(state) {
	return {
		type: ADDROAD,
		payload: state
	}
}

// 初始化状态
const initialState = {
	roadData: 10
}

// reducer（actions handlers）
export function roadReducer(state = initialState, action) {
	switch (action.type) {
		case ADDROAD:
			return {
				...state,
				roadData: state.roadData + 1
			}
		case 'REMOVE':
			return {
				...state,
				roadData: state.roadData - 1
			}
		default:
			return state
	}
}
