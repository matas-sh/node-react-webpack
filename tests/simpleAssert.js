const chai = require('chai');
const expect = chai.expect;

let testString = 'pass';
let testPass = 'pass';
let testFail = 'fail';

it('test pass', () => {
    // should pass
    expect(testPass).to.equal(testString);
});

it('test pass', () => {
    // should fail - should prevent from merging a pull requests
    expect(testFail).to.equal(testString);
});
