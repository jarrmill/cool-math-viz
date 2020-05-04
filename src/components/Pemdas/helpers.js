class pemdasEquation {
  constructor(equation) {
    // all functions are pure funcs, except that they add stepsTaken and toggle isInParens
    this.equation = equation;
    this.stepsTaken = [];
    this.isValid = this.validate(equation);
    this.isInParens = false;
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
      this.isInParens = true;
      equation = equation.replace(`${firstMatch}`, this.solve(firstMatch.slice(1, -1)));
      this.push(equation);
      this.isInParens = false;
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
      if (!this.isInParens) this.push(arr.join('')); 
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
    if (!this.isInParens) this.push(results.join(''));
    return results;
  }

  validate(equation) {
    const counter = makeCounter(equation);
    if (equation === '') return false;
    if (equation.indexOf(")(") !== -1) return false;
    if (equation.match(/^[A-Z]+$/)) return false;
    if (!equation[0].match(/^[0-9]*$/) && equation[0] !== "(") return false;
    if (!equation[equation.length - 1].match(/^[0-9]*$/) && equation[equation.length - 1] !== ")") return false;
    if (counter["("] !== counter[")"]) return false;
    return true;
  }

  push(equation) {
    this.stepsTaken.push(equation);
  }
}

const makeCounter = function(equation) {
  const dict = {};
  for (let i = 0; i < equation.length; i++) {
    let char = equation[i];
    if (dict[char]) dict[char] += 1;
    else dict[char] = 1;
  }

  return dict;
}

module.exports = pemdasEquation;