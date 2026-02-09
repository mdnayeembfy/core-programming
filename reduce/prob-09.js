// Calculate average value

function average(arr) {
  const total = arr.reduce((sum, n) => sum + n, 0)
  return total / arr.length
}

const result = average([10, 20, 30])
console.log("test: ", result)