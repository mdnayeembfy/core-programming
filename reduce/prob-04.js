// Flatten a 2D array

function flattenArray(arr) {
  return arr.reduce((flat, curr) => flat.concat(curr), [])
}

const result = flattenArray([[1, 2], [3, 4], [5]])
console.log("test: ", result)