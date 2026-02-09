// Function with object parameter and defaults

function createUser({ name = 'Anonymous', age = 0 } = {}) {
  return { name, age }
}

const result1 = createUser()
const result2 = createUser({ name: 'Bob', age: 21 })
console.log("test1: ", result1, "test2: ", result2)