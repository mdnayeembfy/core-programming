// Extract names from user objects

function extractNames(users) {
  return users.map(user => user.name)
}

const users = [{ name: 'A' }, { name: 'B' }]

const result = extractNames(users)
console.log("test: ", result)