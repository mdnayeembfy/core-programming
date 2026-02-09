// Count occurrences of values

function countOccurrences(arr) {
  return arr.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1
    return count
  }, {})
}

const result = countOccurrences(['a', 'b', 'a', 'c', 'b'])
console.log("test: ", result)