import { combineReducers } from 'redux'
import { roadReducer as roadState} from './roadReducer'
import { windReducer as windState } from './windReducer'

// 合并reducer
// 注意：两个reducer里的type值不能相同，dispatch会执行与当前type匹配的所有case。但并不会报错
const rootReducer = combineReducers({
  roadState,
  windState
})

export default rootReducer
