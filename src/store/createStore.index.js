import { createStore } from 'redux';
import rootReducer from '../reducers';
// 创建store来存放应用中所有的state，内部维护的方法：getState、dispatch、replaceReducer、subscribe
const store = createStore(rootReducer);

// 监听store的变化
store.subscribe(() => {
	console.log(store.getState());
});

export default store;

// 推荐文档 https://blog.csdn.net/weixin_33739646/article/details/87961212
