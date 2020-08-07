const expect = require('chai').expect;
const {fizzbuzz} = require('../src/fizzbuzz');

describe("Fizzbuzz", () => {
    it("Should return 'buzz' if it's a multiple of 5", () => {
        expect(fizzbuzz(15)).to.equal("buzz");
    });
    it("Should return 'fizz' if it's a multiple of 7", () => {
        expect(fizzbuzz(14)).to.equal("fizz");
    });
    it("Should return 'fizzbuzz' if it's a multiple of 5 and 7", () => {
        expect(fizzbuzz(35)).to.equal("fizzbuzz");
    });
    it("Should return '' if it's not a multiple of 5 or 7", () => {
        expect(fizzbuzz(12)).to.equal("");
    });
    it("handles empty answers", () => {
        expect(fizzbuzz()).to.contain('Error!');
    });
})