var server = require('myserver4')
  , router = require('router2')
  , handlers = require('requestHandlers5');

server.start(router.route, handlers);
