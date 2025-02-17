import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  conter: {
    count: 0,
  },
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state, action) {
      const newCount = state.conter.count + action.payload
      state.conter = {
        count: newCount,
      }
    },
    decrement(state, action) {
        const newCount = state.conter.count - action.payload
        state.conter = {
            count: newCount,
          }
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer },
})
