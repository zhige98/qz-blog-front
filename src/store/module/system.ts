import { createSlice } from '@reduxjs/toolkit'

const systemSlice = createSlice({
  name: 'system',
  initialState: {
    headerFixed: false
  },
  reducers: {}
})

export default systemSlice.reducer
