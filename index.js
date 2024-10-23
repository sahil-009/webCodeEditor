const http = require('node:http');
const express = require('express');
const {Server: socletServer} = require('socket.io');

var os = require('os');
const pty =require('node-pty');
var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';


const app = express();
const server = http.createServer(app);
const io = new SocketServer({
    cors: {
        origin: '*',
    }
})
io.attach(server);
io.on('connection', (socket) => {
    console.log('new connection', socket.id);}
)

app.listen(3000, () => console.log('server is running :3000') )