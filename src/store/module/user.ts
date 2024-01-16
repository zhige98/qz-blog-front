import { IPersion, getUserInfo } from '@/service/user'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUserInfoAction = createAsyncThunk(
  'userInfo',
  (_, { dispatch }) => {
    getUserInfo().then((res) => {
      dispatch(getInfoAction(res))
    })
  }
)

interface IUserState {
  userInfo: IPersion
}

const userState: IUserState = {
  userInfo: {} as IPersion
}

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    getInfoAction(state, { payload }) {
      state.userInfo = payload
    }
  }
})

export const { getInfoAction } = userSlice.actions

export default userSlice.reducer
