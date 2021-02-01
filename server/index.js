const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
  serveClient: false,
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("draw", ({tool, payload}) =>{
    socket.broadcast.emit("draw", {tool, payload})
    console.log(tool, payload)
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});