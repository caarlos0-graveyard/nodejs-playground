var server = require('myserver5')
  , router = require('router3')
  , handlers = require('requestHandlers6');

server.start(router.route, handlers);
