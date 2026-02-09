// Find the maximum value

function findMax(arr) {
  return arr.reduce((max, n) => n > max ? n : max);
}

const result = findMax([3, 7, 2, 9, 5])
console.log("test: ", result)