// Function using spread operator

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2]
}

const result = mergeArrays([1, 2], [3, 4])
console.log("test: ", result)