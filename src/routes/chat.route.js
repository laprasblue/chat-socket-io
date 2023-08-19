const chatController = require('../controllers/chat.controller');

const chatRoute = require('express').Router();

chatRoute.get('/', chatController.homepage);
chatRoute.get('/message', chatController.message);
chatRoute.get('/join-room', chatController.joinRoom);

module.exports = chatRoute;
