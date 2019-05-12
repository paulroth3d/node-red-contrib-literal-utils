//-- logger
const log = require('fancy-log'); // eslint-disable-line no-unused-vars
//-- asserts for mocha tests / others are also available.
const {assert,expect} = require('chai'); // eslint-disable-line no-unused-vars

const facade = require('../index');

//-- another way of accessing
const {array: {PickArrayValue}} = require('../index');

describe('facade', () => {
  it('can find your es6 class', (done) => {
    assert.notEqual(facade, null, 'we should be able to find the facade');
    assert.notEqual(facade.array.PickArrayValue, null, 'we should be able to find your es6 class')
    assert.notEqual(PickArrayValue, null, 'can use the other way of accessing the es6 class');
    done();
  });
});