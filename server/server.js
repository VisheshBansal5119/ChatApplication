

//dev simplified
// import { Server } from "socket.io";

// const io = new Server();
const io = require('socket.io')(8080,{
    cors:{
        origin: "*",
        methods: ["GET","POST"]
    }
});
const users = []
let count = 0
io.on('connection',socket=>{
    // res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD");
    // socket.emit('chat-message','Test')

    socket.on('send-chat-message',message =>{
        // console.log(message)
        socket.broadcast.emit('chat-message',message)
    })
    socket.on('new-user',name =>{
        
      users[count]=name
    
        console.log(users[count])
        socket.broadcast.emit('user-connected',users[count])
        count++
    })
})


// Telusko

// const express = require('express');
// const app = express();

// app.get('/', function(req,res){
//     res.send("Hey there");
// })
// app.listen(8080, function(req,res){
//     console.log("It is running..")
// });





// const http = require('http').createServer();
// const io = require('socket.io')(http,{
//     cors: { origin:"*" }
// });
// io.on('connection',(socket) =>{
//     console.log('a user is connected');

//     socket.on('message',(message)=>{
//         console.log(message);
//         io.emit('message',`${socket.id.substr(0,2)} said ${message}`);
//     });
// });

// http.listen(8080,()=> console.log('listening on http://localhost:8080'))







// const { Socket } = require('dgram');
// const WebSocket = require('ws')
// const server = new WebSocket.Server({port:'8080'})

// server.on('connection', socket=>{
//     socket.on('message',message=>{
//         socket.send(`Roger that! ${message}`);
//     });
// });