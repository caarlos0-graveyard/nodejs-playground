var server = require('myserver3')
  , router = require('router1')
  , handlers = require('requestHandlers2');

server.start(router.route, handlers);
