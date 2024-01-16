import { getLabels } from '@/views/classify/service'
import { ILabels } from '@/views/classify/type'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const labelAction = createAsyncThunk('getLabels', (_, { dispatch }) => {
  getLabels().then((res) => {
    dispatch(getLabelAction(res))
  })
})

const classifySlice = createSlice({
  name: 'detail',
  initialState: {
    labelList: [] as ILabels[]
  },
  reducers: {
    getLabelAction(state, { payload }) {
      state.labelList = payload
    }
  }
})

export const { getLabelAction } = classifySlice.actions

export default classifySlice.reducer
