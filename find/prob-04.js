// Find the first user with role "admin"

function findAdmin(users) {
  return users.find(user => user.role === 'admin')
}

const users = [
  { name: 'A', role: 'user' },
  { name: 'B', role: 'admin' }
]

const result = findAdmin(users)
console.log("test: ", result)