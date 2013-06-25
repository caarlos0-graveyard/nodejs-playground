var server = require('myserver3')
  , router = require('router1')
  , handlers = require('requestHandlers1');

server.start(router.route, handlers);
