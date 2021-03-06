const expect = require('chai').expect;
const {calc} = require('../src/calc');

describe("calc", () => {
    it("Should return 'invalid operator' if operator not + or - or / or *", () => {
        expect(calc(5, 10, '~')).to.equal("invalid operator");
    });
    it("Should return the sum", () => {
        expect(calc(5, 10, '+')).to.equal(15);
    });
    it("Should return the difference", () => {
        expect(calc(5, 10, '-')).to.equal(-5);
    });
    it("Should return the division if nb2 not 0", () => {
        expect(calc(5, 10, '/')).to.equal(0.5);
    });
    it("Should return an error if nb2 is 0 for division", () => {
        expect(calc(5, 0, '/')).to.equal("division by 0 impossible");
    });
    it("Should return the multiplication", () => {
        expect(calc(5, 10, '*')).to.equal(50);
    });
    it("Should return an error if nb1 or nb2 is not a number", () => {
        expect(calc(5, '10', '+')).to.equal("please give numbers");
    });

})