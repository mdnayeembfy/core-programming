// Multiply all numbers

function multiplyNumbers(arr) {
  return arr.reduce((product, n) => product * n, 1);
}

const result = multiplyNumbers([1, 2, 3, 4])
console.log("test: ", result)