const WebSocket = require('ws')
const WebSocketServer = WebSocket.Server

const ws = new WebSocketServer({
  port: 6000
})

// 连接池
const clients = []

ws.on('connection', function(websocket) {
  clients.push(websocket)

  console.log(clients.length)

  websocket.on('message', function (message) {
    console.log(message)

    clients.forEach(c => {
      c.send(message)
    })
  })

  websocket.on('close', function (result) {
    clients.some(function (c, index) {
      if (c === websocket) {
        clients.splice(index, 1)
        return true
      }
    })

    console.log(result, clients.length)
  })
})