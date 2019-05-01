# Overview

This is a very simple seed project for starting a new Node-Contrib module project.

# What you will need

* node (with es6+ supported)
* node-red (running 0.20+)

# Scripts

<table>
	<tr>
		<th>Command</th><th>Description</th>
	</tr>
	<tr>
		<td>npm run lint</td>
		<td>Runs eslint against all the code in the nodes and tests directory</td>
	</tr>
	<tr>
		<td>npm run lint:watch</td>
		<td>Same as lint, only runs lint if any of the files in those directories change</td>
	</tr>
	<tr>
		<td>npm run test</td>
		<td>Runs mocha test (using the [node-red-node-test-helper](https://www.npmjs.com/package/node-red-node-test-helper)</td>
	</tr>
	<tr>
		<td>npm run test:watch</td>
		<td>Same as npm run test, only runs tests again if the files change.</td>
	</tr>
</table>

# Further Reading

Please see the [Creating Nodes](https://nodered.org/docs/creating-nodes/) section of the Node-Red documentation for how to create nodes.