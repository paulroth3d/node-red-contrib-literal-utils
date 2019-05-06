/* global describe it */

//-- logger
// const log = require('fancy-log');
//-- asserts for mocha tests / others are also available.
const assert = require('assert');

const yourModule = require('../nodes/your-component');

//-- helper for node red
const helper = require('node-red-node-test-helper');

/**
 * Ensure that the mocha tests run
 */
describe('Mocha Tests', () => {
  it('should be running', (done) => {
    assert.equal(1+2,3,'Tests are running in mocha');
    done();
  });
});

describe('node-red', () => {
  it('should load your-component', () => {
    it('with a name', (done) => {
      const flow = [{id:'n1', type:'your-component', name:'Custom_Name'}];
      helper.load(yourModule, flow, () => {
        const n1 = helper.getNode('n1');
        n1.should.have.property('name', 'Custom_Name');
        assert.equal(n1.name, 'Custom_Name', 'The default name should be passed to your-component');
        done();
      });
    });
  });
});