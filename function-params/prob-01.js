// Function with default parameter

function greet(name = 'Guest') {
  return `Bonjour, ${name}`
}

const result1 = greet()
const result2 = greet('Pierce')
console.log("test1: ", result1, "test2: ", result2)