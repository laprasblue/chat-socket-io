const chatRoute = require('./chat.route');

const routes = require('express').Router();

routes.use('/chat', chatRoute);

module.exports = routes;
