import io from 'socket.io-client'
import { useState } from 'react'
const socket = io.connect('http://localhost:3001')

const App = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = () => {
    socket.emit('send_message', { msg: message })
    setMessage('')
  }

  socket.on('receive_message', (data) => {
    setMessages(messages.concat(data.msg))
  })


  return (
    <div>
      <input value={message} onChange={(event) => setMessage(event.target.value)}/>
      <button onClick={sendMessage}>Send</button>
      <h3>Received messages</h3>
      <ul>
        {messages.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  )
}

export default App
