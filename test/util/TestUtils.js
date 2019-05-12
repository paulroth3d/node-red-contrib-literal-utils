//-- sample code for testing node red

require('../../nodes/Types');

const RED = require('node-red');

const sinon = require('sinon');

const EventEmitter = require('events').EventEmitter;

/**
 * Creates a mock Node Red server
 * @param {string} connectionConfigId - the id of the node that the connection should be found under
 * @param {import('node-red').Node} configMock - the mock configuration node
 * @returns {NodeRed} - a node red mock
 */
function createNodeRedMock(configId, configMock){

  //-- revert if the method is already stubbed
  if (RED.nodes.getNode.revert){
    RED.nodes.getNode.revert();
  }

  RED.nodes.getNode = sinon.stub();
  RED.nodes.getNode.withArgs(configId).returns(configMock);

  return RED;
}

/**
 * Generates a Mock for a Node Red Node
 * @returns {import('node-red').Node} - Mock for a Node Red Node
 */
function createNodeRedNodeMock(){
  const results = new EventEmitter();
  results.status = sinon.spy();
  results.send = sinon.spy();
  results.error = sinon.stub();

  results.context_get = sinon.stub();
  results.context_set = sinon.stub();
  results.context_node_get = sinon.stub();
  results.context_node_set = sinon.stub();
  results.context_global_get = sinon.stub();
  results.context_global_set = sinon.stub();

  results.context = sinon.stub().returns({
    get: results.context_get,
    set: results.context_set,
    flow: {
      get: results.context_node_get,
      set: results.context_node_set
    }
  });

  //-- yay for setting a property to a reserved word...
  //-- @see https://nodered.org/docs/creating-nodes/context
  results.context["global"] = {
    get: results.context_global_get,
    set: results.context_global_set
  };

  return results;
}

module.exports = {
  createNodeRedMock,
  createNodeRedNodeMock
};
