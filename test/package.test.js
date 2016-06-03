/* global describe, it, expect */

var emvc = require('..')
  , Application = require('../lib/application');

describe('emvc', function() {

  it('should expose singleton application', function() {
    expect(emvc).to.be.an('object');
    expect(emvc).to.be.an.instanceOf(Application);
  });

  it('should export version', function() {
    expect(emvc.version).to.be.a('string');
  });

  it('should export constructors', function() {
    expect(emvc.Application).to.equal(emvc.emvc);
    expect(emvc.Application).to.be.a('function');
    expect(emvc.Controller).to.be.a('function');
  });

  it('should export boot phases', function() {
    expect(emvc.boot.controllers).to.be.a('function');
    expect(emvc.boot.views).to.be.a('function');
    expect(emvc.boot.routes).to.be.a('function');
    expect(emvc.boot.httpServer).to.be.a('function');
    expect(emvc.boot.httpServerCluster).to.be.a('function');

    expect(emvc.boot.di).to.be.an('object');
    expect(emvc.boot.di.routes).to.be.a('function');
  });

});