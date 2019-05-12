const log = require('fancy-log'); // eslint-disable-line no-unused-vars

/**
 * Node Red Node that picks a value out of an array of values
 * @class
 * @extends {NodeRedNodeClass}
 */
class PickArrayValue {

  /** Constructor */
  constructor() {
    // super();

    //-- initialize component properties
  }
  
  /**
   * Initialize the node red node
   * @param {NodeRed} RED - Node Red framework
   * @param {NodeRedConfig} config - configuration for module from the node red editor
   * @param {NodeRedNode} nodeRedNode - the node red instance
   */
  initialize(RED, config, nodeRedNode) {
    // super.initialize(RED, config, nodeRedNode);

    //-- capture Node Red info
    /** Node Red Server instance */
    this.RED = RED;
    /** Configuration passed to the node - immutable */
    this.config = config;
    /** Node Red Node this class will update */
    this.nodeRedNode = nodeRedNode;

    //-- capture information from the nodeRedNode
    this.name = nodeRedNode.name;

    //-- handle events on the nodeRedNode
    nodeRedNode.on('input', (msg) => {
      // msg.payload = node.query;

      nodeRedNode.send(msg);
    });

    return this;
  }
}

/**
 * Initialize node-red node module
 * @param {NodeRed} RED - Node Red framework instance
 */
function setupNodeRed(RED){
  RED.nodes.registerType('pick-array-value', function(config){
    RED.nodes.createNode(this, config);

    //-- capture information from the config
    this.name = config.name;

    this.info = new PickArrayValue()
      .initialize(RED, config, this);
  });
}

//-- because it seems we cannot export the class outright...
setupNodeRed.infoClass = PickArrayValue;

module.exports = setupNodeRed;