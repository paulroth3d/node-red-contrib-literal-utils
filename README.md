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

# Developing

While developing your component, its important that we can also test it within Node Red without having to constantly copy the files back and forth.

`npm link` greatly helps in this case - as we can use our local files directly.

**Step 1** run `npm link` within your node-contrib project.

(note the name of the project within the package.json. For example: [The name of the project defined here is: node-red-contrib-seed](https://github.com/paulroth3d/node-red-contrib-seed/blob/master/package.json#L2))

**Step 2** run `npm link [[your-project-name]]` within your node-red project directory.  (For example: `npm link node-red-contrib-seed`)

**Step 3** run Node-Red as normal.

# Further Reading

Please see the [Creating Nodes](https://nodered.org/docs/creating-nodes/) section of the Node-Red documentation for how to create nodes.