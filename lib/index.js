/**
 * Module dependencies.
 */
var Application = require('./application')
  , Controller = require('./controller');


/**
 * Expose default singleton.
 *
 * @api public
 */
exports = module.exports = new Application();

/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Export constructors.
 */
exports.emvc =
exports.Application = Application;
exports.Controller = Controller;

/**
 * Export boot phases.
 */
exports.boot.controllers = require('./boot/controllers');
exports.boot.views = require('./boot/views');
exports.boot.routes = require('./boot/routes');
exports.boot.httpServer = require('./boot/httpserver');
exports.boot.httpServerCluster = require('./boot/httpservercluster');
exports.boot.httpsServer = require('./boot/httpsserver');
exports.boot.httpsServerCluster = require('./boot/httpsservercluster');
exports.boot.di = {};
exports.boot.di.routes = require('./boot/di/routes');