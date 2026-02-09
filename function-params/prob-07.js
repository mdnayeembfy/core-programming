// Partial application (function returns function)

function multiply(a) {
  return function (b) {
    return a * b
  }
}

const double = multiply(2)
const result = double(29)
console.log("test: ", result)