// Find the first active user

function findActiveUser(users) {
  return users.find(user => user.isActive)
}

const list = [
  { name: 'X', isActive: false },
  { name: 'Y', isActive: true }
]

const result = findActiveUser(list)
console.log("test: ", result)