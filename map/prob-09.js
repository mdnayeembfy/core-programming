// Replace null or undefined with default value

function replaceNulls(arr) {
  return arr.map(v => v ?? 'N/A')
}

const result = replaceNulls([1, null, 'hi', undefined])
console.log("test: ", result)