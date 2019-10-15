const server = require('http').createServer()
const io = require('socket.io')(server)

server.listen(8080, err => {
    if (err) throw err
    console.log('server is listening to port 8080')
})