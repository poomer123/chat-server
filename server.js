const server = require('http').createServer()
const io = require('socket.io')(server)

let count = 0

io.on('connection', socket => {
	socket.on('emit', data => {
		console.log('receive data', data)
		count++
		socket.broadcast.emit('message', { id: count, ...data })
	})
})

server.listen(8080, err => {
	if (err) throw err
	console.log('server is listening to port 8080')
})
