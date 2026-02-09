// Find the first negative number

function findFirstNegative(arr) {
  return arr.find(n => n < 0)
}

const result = findFirstNegative([3, -2, 4, -5])
console.log("test: ", result)