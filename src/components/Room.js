import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRoom } from '../reducers/roomReducer'
import socket, { send, leave } from '../socket'

const Room = () => {
  const dispatch = useDispatch()
  const room = useSelector(state => state.room)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = () => {
    setMessages(messages.concat(message))
    send(message, room)
    setMessage('')
  }

  const leaveRoom = () => {
    dispatch(setRoom(''))
    leave(room)
  }

  socket.on('receive-message', data => {
    setMessages(messages.concat(data))
  })

  return (
    <div>
      <h3>You are in room {room}</h3>
      <input
        placeholder='message'
        value={message}        
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <button onClick={leaveRoom}>Leave</button>
      <ul>
        {messages.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  )
}

export default Room