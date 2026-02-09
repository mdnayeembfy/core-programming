// Validate required parameters

function divide(a, b) {
  if (a === undefined || b === undefined) {
    throw new Error('Both parameters are required')
  }
  return a / b
}

const result = divide(10, 2)
console.log("test: ", result)