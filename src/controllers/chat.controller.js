const handleAsync = require('../utils/handleAsyns');

module.exports = {
    homepage: handleAsync(async (req, res, next) => {
        res.sendFile(__baseSource + '/index.html');
    }),

    joinRoom: handleAsync(async (req, res, next) => {
        const { room } = req.body;
        _io.emit('join', room);
        res.sendStatus(200);
    }),

    message: handleAsync(async (req, res, next) => {
        const { message, room } = req.query;
        _io.emit('message-api', message);
        res.sendStatus(200);
    }),
};
