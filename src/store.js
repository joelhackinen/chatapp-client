import { configureStore } from'@reduxjs/toolkit'
import roomReducer from './reducers/roomReducer'


const store = configureStore({
  reducer: {
    room: roomReducer
  }
})

export default store