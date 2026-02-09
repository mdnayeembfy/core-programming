// Filter positive numbers

function filterPositive(arr) {
  return arr.filter(n => n > 0)
}

const result = filterPositive([-2, 0, 3, -5, 6])
console.log("test: ", result)