// const log = require('fancy-log');

module.exports = function(RED) {
  'use strict';

  function YourComponentDef(n){
    RED.nodes.createNode(this, n);

    const node = this;

    node.on("input", (msg) => {
      msg.payload = msg.payload || {};
      msg.payload.message = 'Some message';
      node.send(msg);
    });
  }

  RED.nodes.registerType('your-component', YourComponentDef);
};