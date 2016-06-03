var chai = require('chai');

chai.use(require('chai-connect-middleware'));
chai.use(require('chai-emvc-helpers'));

global.expect = chai.expect;