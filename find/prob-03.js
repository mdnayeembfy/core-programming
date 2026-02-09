// Find the first string longer than 5 characters

function findLongString(arr) {
  return arr.find(str => str.length > 5)
}

const result = findLongString(['hola', 'hello', 'welcome'])
console.log("test: ", result)