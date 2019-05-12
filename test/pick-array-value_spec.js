//-- logger
const log = require('fancy-log'); // eslint-disable-line no-unused-vars
//-- asserts for mocha tests / others are also available.
const {assert,expect} = require('chai'); // eslint-disable-line no-unused-vars

const PickArrayValue = require('../nodes/array/pick-array-value').infoClass;

require('../nodes/Types');

//-- helper for node red
// const helper = require('node-red-node-test-helper');

const testUtils = require('./util/TestUtils');

//-- mock the node red node it will work with
/**
 * Mock the node red node it will work with
 * @type {NodeRedNode}
 */
let NODE_MOCK;
/**
 * Mock node red
 * @type {NodeRed}
 */
let RED_MOCK;
/**
 * Mock the config
 * @type {NodeRedConfig}
 */
let CONFIG_MOCK;
/**
 * Mock of the message
 * @type {NodeRedMessage}
 */
let MSG_MOCK;

describe('pick-array-value', () => {
  beforeEach((done) => {
    RED_MOCK = testUtils.createNodeRedMock();
    NODE_MOCK = testUtils.createNodeRedNodeMock();
    CONFIG_MOCK = {
      name:'node'
    };
    MSG_MOCK={};
    done();
  });
  afterEach((done) => {
    done();
  });
  it('should be running', (done) => {
    assert.equal(1+2,3,'Tests are running in mocha');
    done();
  });
  it('can initialize', () => {
    const testPromise = new Promise((resolve, reject) => {
      const node = new PickArrayValue();
      node.initialize(RED_MOCK, CONFIG_MOCK, NODE_MOCK);
      
      //-- send input
      NODE_MOCK.emit('input', MSG_MOCK);

      assert(NODE_MOCK.send.called, 'we gave the node input, it should send something.');
      
      const sentInfo = NODE_MOCK.send.lastCall.args[0];
      expect(sentInfo).not.to.be.null;

      resolve();
    });
    return testPromise;
  });
});