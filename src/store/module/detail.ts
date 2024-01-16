import { getDetail } from '@/views/detail/service'
import { DetailItem } from '@/views/detail/type'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const detailContentAction = createAsyncThunk(
  'getDetail',
  (id: string, { dispatch }) => {
    getDetail(id).then((res) => {
      dispatch(getDetailAction(res))
    })
  }
)

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailContent: {} as DetailItem
  },
  reducers: {
    getDetailAction(state, { payload }) {
      state.detailContent = payload
    }
  }
})

export const { getDetailAction } = detailSlice.actions

export default detailSlice.reducer
