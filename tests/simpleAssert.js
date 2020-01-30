const chai = require('chai');
const expect = chai.expect;

let testString = 'pass';
let testPass = 'pass';
let testFail = 'fail';

// should pass
expect(testPass).to.equal(testString);
// should fail
expect(testFail).to.equal(testString);