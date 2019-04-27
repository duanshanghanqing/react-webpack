import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
// applyMiddleware来自redux可以包装 store 的 dispatch
// thunk作用是使action创建函数可以返回一个function代替一个action对象
export default (initialState = {}) => {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f, // 调用开发命令行
    ),
  );
  return store;
};
