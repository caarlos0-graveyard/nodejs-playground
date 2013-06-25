var server = require('myserver6')
  , router = require('router5')
  , handlers = require('requestHandlers9');

var handle = {
  '/': handlers.start,
  '/start': handlers.start,
  '/upload': handlers.upload,
  '/show': handlers.show
};

server.start(router.route, handle)
