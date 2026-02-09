// Function with destructured object parameter

function printUser({ name, age }) {
  return `${name} is ${age} years old`
}

const result = printUser({ name: 'Alice', age: 25 })
console.log("test: ", result)