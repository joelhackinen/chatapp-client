import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoom(state, action) {
      return action.payload
    }
  }
})

export const { setRoom } = roomSlice.actions

export default roomSlice.reducer