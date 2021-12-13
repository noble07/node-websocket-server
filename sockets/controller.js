const socketController = socket => {

  console.log('Cliente conectado', socket.id)

  socket.on('disconnect', () => {
    console.log('Cliente desconectado', socket.id)
  })

  // Se puede recibir un callback desde el cliente para enviar
  // alguna retroalimentacion
  socket.on('send-message', (payload, callback) => {
    const id = 123456
    callback(id)
    
    // Emite a todos los clientes excepto el que lo envía
    socket.broadcast.emit('send-message', payload)
  })
}

module.exports = {
  socketController
}