import { Calculator } from "./calculator";

describe('calculate', function() {
    it('add', function() {
      let result = Calculator.sum(5, 2);
      expect(result).toBe(7);
    });

    it('add', function() {
      let result = Calculator.sum(5, 3);
      expect(result).toBe(8);
    });
  });