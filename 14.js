var server = require('myserver5')
  , router = require('router3')
  , handlers = require('requestHandlers7');

server.start(router.route, handlers);
