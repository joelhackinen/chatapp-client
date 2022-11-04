import io from 'socket.io-client'
const socket = io('http://localhost:3001')

export const join = (room) => {
  socket.emit('join-room', room)
}

export const leave = (room) => {
  socket.emit('leave-room', room)
}

export const send = (message, room) => {
  socket.emit('send-message', message, room)
}

export default socket