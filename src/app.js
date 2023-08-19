const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const SocketServices = require('./services/chat.services');
const handleError = require('./utils/handleError');

global._io = io;
global.__baseSource = path.join(__dirname, 'public');

// middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());

// socket io setup
global._io.on('connection', SocketServices.connection);

// route
app.use('/', routes);

// handle error
app.use((req, res, next) => {
    const error = new Error('Route Not found');
    error.status = 404;
    next(error);
});
app.use(handleError);

module.exports = http;
