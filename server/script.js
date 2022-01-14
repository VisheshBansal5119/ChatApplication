// dev simplified


const socket = io('http://localhost:8080')
const name = prompt('What is your name?')
const msgform = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const messageContainer = document.getElementById('message-container')
socket.on('chat-message',data=> {
  appendMessage(data)
})
socket.on('user-connected',name=> {
  appendMessage(`${name} is connected`)
})
appendMessage('You Joined')
socket.emit('new-user', name)
msgform.addEventListener('submit', e=>{
  e.preventDefault()
  const message = messageInput.value
  socket.emit('send-chat-message',message)
  messageInput.value = ''
})

function appendMessage(message){
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)

}

// const socket = io('ws://localhost:8080');

// socket.on('message',text =>{
//     const el = document.createElement('li');
//     el.innerHTML = text;
//     document.querySelector('ul').appendChild(el)
// });

// document.querySelector('button').onclick = ()=>{
//     const text = document.querySelector('input').value;
//     socket.emit('message',text)
// }

// const WebSocket = require('ws')
// const url = 'ws://localhost:8080'
// const connection = new WebSocket(url)
 
// connection.onopen = () => {
//   connection.send('Message From Client') 
// }
 
// connection.onerror = (error) => {
//   console.log(`WebSocket error: ${error}`)
// }
 
// connection.onmessage = (e) => {
//   console.log(e.data)
// }