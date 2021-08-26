const expect = require('chai').expect;
const {calc} = require('../src/calc');

describe("calc", () => {
    it("Should return 'invalid operator' if operator not + or - or / or *", () => {
        expect(calc(5, 10, '~')).to.equal("invalid operator");
    });

})