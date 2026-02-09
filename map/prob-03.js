// Add index to each element

function addIndex(arr) {
  return arr.map((value, index) => `${index}: ${value}`)
}

const result = addIndex(['a', 'b', 'c'])
console.log("test: ", result)