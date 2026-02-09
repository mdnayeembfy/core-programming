// Find the first number greater than 50

function findGreaterThan50(arr) {
  return arr.find(n => n > 50)
}

const result = findGreaterThan50([10, 40, 60, 20])
console.log("test: ", result)