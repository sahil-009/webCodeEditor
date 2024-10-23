const http = require('node:http');
const express = require('express');
const {Server: socketServer} = require('socket.io');

var os = require('os');
const pty =require('node-pty');

var ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
  });
  

var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';


const app = express();
const server = http.createServer(app);
// creating server for socket 
const io = new SocketServer({
// cors for frontend issues
    cors: {
        origin: '*',
    }
})

io.attach(server);  //3000 
app.listen(3000, () => console.log('server is running :3000'))

io.on('connection', (socket) => {
    console.log('new connection', socket.id);

    socket.on('terminal:write', (data => {
        ptyProcess.write(data);
    }
    ))
}
)

