import { useDispatch, useSelector } from 'react-redux'
import { setRoom } from './reducers/roomReducer'
import Room from './components/Room'
import { join } from './socket'
import { useField } from './hooks'

const App = () => {
  const dispatch = useDispatch()
  const room = useSelector(state => state.room)
  const { reset: resetField, ...roomField } = useField('text')

  const joinRoom = () => {
    dispatch(setRoom(roomField.value))
    join(roomField.value)
    resetField()
  }

  const roomForm = (
    <div>
      <h3>Join a room</h3>
      <input
        { ...roomField }
        placeholder='room'
      />
      <button onClick={joinRoom}>Join</button>
    </div>
  )

  return (
    room ? <Room /> : roomForm
  )
}

export default App
