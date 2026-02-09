// Function with optional parameter

function createMessage(text, prefix) {
  return prefix ? `${prefix}: ${text}` : text
}

const result1 = createMessage('Hello')
const result2 = createMessage('Hello', 'INFO')
console.log("test1: ", result1, "test2: ", result2)