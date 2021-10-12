const path = require('path')
const express = require('express');
const socketio = require('socket.io');
const http = require('http')

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set static folder
app.use(express.static(path.join(__dirname,'public')))

//run when a client connects
io.on('connection',socket => {
console.log('New WS connection...');
socket.emit('message','Welcome to ChatCord!')
});

const PORT = 3000 || process.env.PORT;
server.listen(PORT,()=> console.log(`Server running on port ${PORT}`));
