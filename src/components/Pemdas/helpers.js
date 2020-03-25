class pemdasEquation {
  constructor(equation) {
    this.equation = equation;
    this.stepsTaken = [];
    this.operators = {
      "+": (a, b) => {return a + b},
      "-": (a, b) => {return a - b},
      "*": (a, b) => {return a * b},
      "/": (a, b) => {return a / b},
      "^": (a, b) => {return Math.pow(a, b)}
    }

    this.solution = this.solve(equation);
  }

  solve(equation) {
    while(equation.match(/\(.*?\)/)) {
      let firstMatch = equation.match(/\(.*?\)/)[0]
      equation = this.equation.replace(`${firstMatch}`, this.solve(firstMatch.slice(1, -1)));
    }

    let parsedEQ = this.parse(equation);
    parsedEQ = this.simplify(parsedEQ, '^');
    parsedEQ = this.simplify(parsedEQ, '*');
    parsedEQ = this.simplify(parsedEQ, '/');
    parsedEQ = this.simplify(parsedEQ, '+');
    parsedEQ = this.simplify(parsedEQ, '-');

    return parsedEQ[0]
  }

  simplify(equation, operator) {
    let arr = equation.slice();
    // takes an array and operator and solves all of the equations where the operator is present
    while(arr.indexOf(operator) !== -1) {
      const idx = arr.indexOf(operator);
      arr.splice(idx - 1, 3, this.operators[operator](parseFloat(arr[idx - 1]), parseFloat(arr[idx + 1]))); 
    }
    return arr;
  }

  parse(equation) {
    // takes a equation string (parsed of parentheses) and returns an array of values of numbers and operators
    // ie. [ "1", "+", "34", '56];
    let results = [];
    let currentNumber = "";
  
    for (let char of equation) {
      if(char === ' ') continue;
      if (!this.operators[char]) {
        currentNumber += char;
      }
      else {
        results.push(currentNumber);
        results.push(char);
        currentNumber = ''
      }
    }
    results.push(currentNumber);
    return results;
  }
}

module.exports = pemdasEquation;