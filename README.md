# Overview

Utility nodes for working with literal values.

Note, we also describe some cases where Out of the Box functionality may also compare.

# Array

Nodes to help with working with Arrays.

## Pick Array Value

Given an array of objects, picks a value within each object to put inside of an array.

(This works very well with other nodes like [node-red-contrib-serial-iterator](https://flows.nodered.org/node/node-red-contrib-serial-iterator)

For example, given an array like the following:

	{
	  "payload": {
		"results": {
		  "sobjects": [
			{
			  "name": "AcceptedEventRelation",
			  "urls": {
				"sobject": "/services/data/v42.0/sobjects/AcceptedEventRelation"
			  }
			},
			{
			  "name": "Account",
			  "urls": {
				"sobject": "/services/data/v42.0/sobjects/Account"
			  }
			},
			{
			  "name": "AccountChangeEvent",
			  "urls": {
				"sobject": "/services/data/v42.0/sobjects/AccountChangeEvent"
			  }
			},
			{
			  "name": "AccountCleanInfo",
			  "urls": {
				"sobject": "/services/data/v42.0/sobjects/AccountCleanInfo"
			  }
			}
		  ]
		}
	  }
	}

We would like a collection of all the 'sobject' values...

If we configure the node with the following

* arrayPath: 'payload.results.sobjects'
* valuePath: 'urls.sobject'
* targetPath: 'payload.objectUrls'

We'll get:

	{
	   "payload":{
		  "results":{
			 "sobjects":[
				...
			 ]
		  },
		  "objectUrls":[
			 "/services/data/v42.0/sobjects/AcceptedEventRelation",
			 "/services/data/v42.0/sobjects/Account",
			 "/services/data/v42.0/sobjects/AccountChangeEvent",
			 "/services/data/v42.0/sobjects/AccountCleanInfo"
		  ]
	   }
	}

### Example Flow



### Props

<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
		<th>Value</th>
	</tr>
	<tr>
		<td>Array Path</td>
		<td>The path within the message to the Array to iterate over</td>
		<td>payload.describe.sobjects</td>
	</tr>
	<tr>
		<td>Value Path</td>
		<td>The path within the array's objects to the value we should collect.</td>
		<td>urls.layoutURL</td>
	</tr>
	<tr>
		<td>Target Path</td>
		<td>The path within the message we should put the resulting array of collected values.</td>
		<td>payload.layouts</td>
	</tr>
</table>

# Extending

## Running Tests
* To test the project run `npm run test` or `npm run test:watch` to continuously test.

## Running Linter
* To run linters on the project, run `npm run lint` or `npm run lint:watch` to continously lint.
