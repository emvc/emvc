/**
 * Listen for HTTPS requests.
 *
 * This phase creates an HTTPS server and listens for requests on the given
 * address and port, defaulting to 0.0.0.0:4000.
 *
 * This phase is typically one of the final phases in the boot sequence.
 * Initializers should be run and routes should be drawn prior to this phase,
 * ensuring that the application is fully prepared to handle requests.
 *
 * Examples:
 *
 *   app.phase(emvc.boot.httpsServer(8080, {key: fs.readFileSync('...'), cert: fs.readFileSync('...')}));
 *
 *   app.phase(emvc.boot.httpsServer(8080, '127.0.0.1', {key: fs.readFileSync('...'), cert: fs.readFileSync('...')}));
 *
 *   app.phase(emvc.boot.httpsServer({ address: '127.0.0.1', port: 8080, key: fs.readFileSync('...'), cert: fs.readFileSync('...')}));
 *
 * @param {Number} port
 * @param {String} address
 * @param {Object} options
 * @return {Function}
 * @api public
 */

module.exports = function(port, address, options) {
  var https = require('https');

  if (typeof address == 'object') {
    options = address;
    address = undefined;
  } else if (typeof port == 'object') {
    options = port;
    address = undefined;
    port = undefined;
  }
  options = options || {};

  return function httpsServer(done) {
    port = port || options.port || this.get('ssl port') || 4000;
    address = address || options.address || this.get('ssl address') || '0.0.0.0';

    https.createServer(options, this.express).listen(port, address, function() {
      var addr = this.address();
      console.info('HTTPS server listening on https://%s:%d', addr.address, addr.port);
      return done();
    });
  };
};
