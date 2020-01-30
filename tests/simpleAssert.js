const chai = require('chai');
const expect = chai.expect;

let testString = 'pass';
let testPass = 'pass';
let testFail = 'fail';

it('test pass', () => {
    // should pass
    expect(testPass).to.equal(testString);
});

/*

    Testing if passing all tests allows a merge

it('test pass', () => {
    // should fail - should prevent from merging a pull request +
    expect(testFail).to.equal(testString);
});
*/
