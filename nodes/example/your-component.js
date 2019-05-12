//-- logger - any logger would be fine
const log = require('fancy-log'); // eslint-disable-line no-unused-vars

//-- while typescript is not supported
//-- using typedefs can allow for intellisense / introspection
//-- within visual studio code (and some other editors)
require('../Types');

/**
 * Description_of_your_component
 * @class
 * @extends {NodeRedNodeClass}
 */
class SomeClass {

  /** Constructor */
  constructor() {
    // super();

    //-- initialize component properties
  }
  
  /**
   * Initialize the node red node
   * @param {Red} RED - Node Red framework
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

/*
  UNFORTUNATELY, node red does not support AMD modules,
  and requires that the export from this file is the function to generate the node.

  As a consequence the setupNodeRed function must be the export
  and the 'this' scoped is the only access we have to the Node Red Node instance

  For simplicity - and those just trying to get up and running
  the es6 class INSTANCE can be accessed through 'info' property
  and the es6 CLASS can be accessed through the 'infoClass'
  
  For example, if you have a node red node with an id of 'iz8x23'
  you can get that node through:
  RED.node.getNodes(ID_OF_NODE).info
  (like if this was a 'configuration' node)
  
  However, it is much more likely to access this through a require
  const SomeClass = require('path/to/node/file').infoClass;

  As an alternative - the class can be provided in a separate file for access
*/


/**
 * Initialize node-red node module
 * @param {Red} RED - Node Red framework instance
 */
function setupNodeRed(RED){
  //-- register the component type (in this case: your-component)
  //-- so when other nodes say their type is 'your-component',
  //-- they can use this factory
  RED.nodes.registerType('your-component', function(config){
    RED.nodes.createNode(this, config);

    //-- capture information from the config
    this.name = config.name;

    //-- allow access to the es6 class instance through property 'info'
    this.info = new SomeClass()
      .initialize(RED, config, this);
  });
}

//-- allow access to the es6 class through the property 'infoClass'
setupNodeRed.infoClass = SomeClass;

module.exports = setupNodeRed;


//-- example snippet
//   
//   const log = require('fancy-log'); // eslint-disable-line no-unused-vars
//   
//   /**
//    * $3
//    */
//   class $2 {
//   
//     /** Constructor */
//     constructor() {
//       // super();
//   
//       //-- initialize component properties
//     }
//     
//     /**
//      * Initialize the node red node
//      * @param {object} RED - Node Red framework
//      * @param {object} config - configuration for module from the node red editor
//      * @param {object} nodeRedNode - the node red instance
//      */
//     initialize(RED, config, nodeRedNode) {
//       // super.initialize(RED, config, nodeRedNode);
//   
//       //-- capture Node Red info
//       this.RED = RED;
//       this.config = config;
//       this.nodeRedNode = nodeRedNode;
//   
//       //-- capture information from the nodeRedNode
//       this.name = nodeRedNode.name;
//   
//       //-- handle events on the nodeRedNode
//       nodeRedNode.on('input', (msg) => {
//         // msg.payload = node.query;
//   
//         nodeRedNode.send(msg);
//       });
//   
//       return this;
//     }
//   }
//   
//   /**
//    * Initialize node-red node module
//    * @param {NodeRed} RED - Node Red framework instance
//    */
//   function setupNodeRed(RED){
//     RED.nodes.registerType('$1', function(config){
//       RED.nodes.createNode(this, config);
//   
//       //-- capture information from the config
//       this.name = config.name;
//   
//       this.info = new $2()
//         .initialize(RED, config, this);
//     });
//   }
//   
//   //-- because it seems we cannot export the class outright...
//   setupNodeRed.infoClass = $2;
//   
//   module.exports = setupNodeRed;