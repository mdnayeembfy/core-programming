// Sum all numbers

function sumNumbers(arr) {
  return arr.reduce((sum, n) => sum + n, 0)
}

const result = sumNumbers([1, 2, 3, 4])
console.log("test: ", result)