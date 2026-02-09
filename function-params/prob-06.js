// Function accepting a callback

function processNumber(num, callback) {
  return callback(num)
}

const result = processNumber(5, n => n * n)
console.log("test: ", result)