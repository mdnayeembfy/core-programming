// Filter strings longer than 3 characters

function filterLongStrings(arr) {
  return arr.filter(s => s.length > 3)
}

const result = filterLongStrings(['la','test','hasta','hola', 'vista'])
console.log("test: ", result)