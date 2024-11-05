const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir los archivos estáticos del frontend
app.use(express.static('public'));

// Manejo de conexiones y eventos de Socket.io
io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');

  // Evento para cuando un usuario se une a una sala
  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);
    socket.broadcast.to(room).emit('message', {
      username: 'Sistema',
      content: `${username} se ha unido a la conversación`,
      time: new Date().toLocaleTimeString(),
    });
  });

  // Evento para recibir mensajes y enviarlos a la sala correspondiente
  socket.on('chatMessage', ({ username, room, content }) => {
    io.to(room).emit('message', {
      username,
      content,
      time: new Date().toLocaleTimeString(),
    });
  });

  // Evento para desconectar al usuario y notificar a la sala
  socket.on('disconnect', () => {
    io.emit('message', {
      username: 'Sistema',
      content: `Un usuario ha dejado la conversación`,
      time: new Date().toLocaleTimeString(),
    });
    console.log('Un usuario se ha desconectado');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor en ejecución en el puerto ${PORT}`));
