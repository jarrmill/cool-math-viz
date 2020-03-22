const solve = function(equation) {
  // returns an object with two values
  // 1) the solution
  // 2) the steps it took to get there
  // if not a good equation returns an error message
  while(equation.match(/\(.*?\)/)) {
    const firstMatch = equation.match(/\(.*?\)/)[0]
    console.log('replacing: ', firstMatch)
    equation = equation.replace(`${firstMatch}`, solve(firstMatch.slice(1, -1)));
  }
  return equation;
}

const operators = {
  "+": (a, b) => {return a + b},
  "-": (a, b) => {return a - b},
  "*": (a, b) => {return a * b},
  "/": (a, b) => {return a / b},
  "^": (a, b) => {return Math.pow(a, b)}
}

const parse = function(equation) {
  // takes a equation string (parsed of parentheses) and returns an array of values of numbers and operators
  // ie. [ "1", "+", "34", '56];
  let results = [];
  let currentNumber = "";

  for (let char of equation) {
    if (!operators[char]) {
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

const sampleEquation = "(a)(b)"
//console.log(solve(sampleEquation))
console.log(parse("abcde + d3f"))
//export default solve;

