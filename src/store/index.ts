import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'
import systemReducer from './module/system'
import userReducer from './module/user'
import homeReducer from './module/home'
import detailReducer from './module/detail'
import classifyReducer from './module/classify'

const store = configureStore({
  reducer: {
    system: systemReducer,
    user: userReducer,
    home: homeReducer,
    detail: detailReducer,
    classify: classifyReducer
  }
})

type GetStateFnType = typeof store.getState
type IRootStare = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// 调用函数签名 https://www.reduxjs.cn/tutorials/typescript-quick-start 定义 Hooks 类型
export const useAppSelector: TypedUseSelectorHook<IRootStare> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
