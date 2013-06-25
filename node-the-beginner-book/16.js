var server = require('myserver5')
  , router = require('router4')
  , handlers = require('requestHandlers8');

var handle = {
  '/': handlers.start,
  '/start': handlers.start,
  '/upload': handlers.upload,
  '/show': handlers.show
};

server.start(router.route, handle)
