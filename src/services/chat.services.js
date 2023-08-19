class SocketServices {
    connection(socket) {
        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });

        socket.on('join', (channelId) => {
            socket.leaveAll();
            socket.join(channelId);
        });

        socket.on('leave', (channelId) => {
            socket.leave(channelId);
        });

        socket.on('message', (message) => {
            _io.to('room1').emit('new-message', message);
        });

        socket.on('message-api', (msg) => {
            socket.leaveAll();
            socket.join('room1');
            _io.to('room1').emit('new-message', 'message');
        });
    }
}

module.exports = new SocketServices();
