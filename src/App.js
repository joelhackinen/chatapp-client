import io from 'socket.io-client'
import { useState } from 'react'
const socket = io.connect('http://localhost:3001')

const App = () => {
  const [room, setRoom] = useState('')
  const [roomField, setRoomField] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = () => {
    socket.emit('send-message', message, room)
    setMessage('')
  }

  const joinRoom = () => {
    setRoom(roomField)
    socket.emit('join-room', roomField)
    setRoomField('')
  }

  socket.on('receive-message', (data) => {
    setMessages(messages.concat(data))
  })


  return (
    <div>
      <h2>
        {socket.id}
      </h2>
      <h3>
        message will be sent to {room ? `room ${room}` : 'everyone'}
      </h3>
      <div>
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder='message'
        />
      </div>
      <div>
        <input
          value={roomField}
          onChange={(event) => setRoomField(event.target.value)}
          placeholder='room'
        />
        <button onClick={joinRoom}>Join</button>
      </div>
      <button onClick={sendMessage}>Send</button>
      <h3>Received messages</h3>
      <ul>
        {messages.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  )
}

export default App
