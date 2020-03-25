const Equation = require('../src/components/Pemdas/helpers');
const assert = require('chai').assert;



describe('PEMDAS', () => {
  describe('solve', () => {
    it('should solve a basic eqString', () => {
      const eqString = "1 + 1 + 2 * 4 / 4";
      const expected = 4;
      const actual = new Equation(eqString);

      assert.equal(expected, actual.solution);
    })

    it('should solve eqStrings with parentheses', () => {
      const eqString = "(2 + 3) / 5"
      const expected = 1;
      const actual = new Equation(eqString);

      assert.equal(expected, actual.solution);
    })

    it('shouldnt break with weird stuff', () => {
      const eqString = "abcd";
      const expected = "abcd";
      const actual = new Equation(eqString);

      assert.equal(expected, actual.solution);
    })
  });

  describe('simplify', () => {
    it('should simplify a basic eqString', () => {
      const eqString = "1 + 1 + 1";
      const expected = [3];
      const actual = new Equation(eqString).solve(eqString, "+");

      assert.equal(expected, actual);
    })
  });

  describe('parse', () => {
    it('should parse a basic string into an array', () => {
      const eqString = "1 + 1";
      const expected = ["1", "+", "1"];
      const actual = new Equation(eqString);

      assert.deepEqual(expected, actual.parse(actual.equation));
    })
  })
})