const Equation = require('../src/components/Pemdas/helpers');
const assert = require('chai').assert;



describe('PEMDAS', () => {
  describe('solve', () => {
    it('should solve a basic eqString', () => {
      const eqString = "1+1+2*4/4";
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
  });

  describe('validate', () => {
    it('should return true for a good equation', () => {
      const eqString = "1 + 1";
      const expected = true;
      const actual = new Equation(eqString);

      assert.deepEqual(expected, actual.validate(eqString)) 
    });

    it('should not break on an empty string equation', () => {
      const eqString = '';
      const expected = false;
      const actual = new Equation(eqString);

      assert.deepEqual(expected, actual.validate(actual.equation));
    });

    it('should return false for any equation with alphabetic letters', () => {
      const eqString = "a + 1";
      const expected = false;
      const actual = new Equation(eqString);

      assert.deepEqual(expected, actual.validate(eqString))
    });

    it('should return false for an equation with an operator at the start', () => {
      const eqString = "+ 1 + 1";
      const expected = false;
      const actual = new Equation(eqString);

      assert.deepEqual(expected, actual.validate(eqString));
    })

    it('should return false for an equation with an operator at the end', () => {
      const eqString = "1+1+";
      const expected = false;
      const actual = new Equation(eqString);

      assert.deepEqual(expected, actual.validate(eqString));
    })

    it('should return false for an equation with an open bracket', () => {
      const eqString = "1+1+(1";
      const expected = false;
      const actual = new Equation(eqString);

      assert.deepEqual(expected, actual.validate(eqString));
    })
  })
})