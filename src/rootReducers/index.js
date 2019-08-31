import { combineReducers, createStore } from 'redux'
import { roadReducer as roadState} from './roadReducer'
import { windReducer as windState } from './windReducer'

// 合并reducer
// 注意：两个reducer里的type值不能相同，dispatch会执行与当前type匹配的所有case。但并不会报错
const rootReducer = combineReducers({
  roadState,
  windState
})

// 创建store来存放应用中所有的state，内部维护的方法：getState、dispatch、replaceReducer、subscribe
const store = createStore(rootReducer)

// 监听store的变化
store.subscribe(() => {
  console.log(store.getState())
})

export default store
